import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Search from "../Search/Search";
import History from "../History/History";
import Setting from "../Setting/Setting";
import axios from "axios";



function Main(props) {
    const [searchingState, setSearchingState] = useState(false);
    const [searchInputValue, setSearchInput] = useState("");
    const [searchResultSuccess, setSearchResultSuccess] = useState([]);
    const [searchResultSuccessHistory, setSearchResultSuccessHistory] = useState([]);
    const [searchResultFail, setSearchResultFail] = useState("");
    const [snackBarValue, setSnackBarValue] = React.useState(false);
    const [twentyFourHoursHistory, setTwentyFourHoursHistory] = React.useState([]);
    const [fiveDaysHistory, setFiveDaysHistory] = React.useState([]);
    const [selectValue, setSelectValue] = React.useState("temp");

    const setSearchInputValue = (e) => {
        setSearchResultFail("");
        setSearchInput(e.target.value)
    }


    const searchCityWeather = () => {
        if (searchInputValue === "") {
            return;
        }
        setSearchingState(true);
        setSearchInput("");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=metric&appid=${process.env.REACT_APP_API}`)
            .then((res) => {
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${res.data.id}&units=metric&appid=${process.env.REACT_APP_API}`)
                    .then((response) => {
                        setSearchingState(false);
                        setSearchResultSuccess([res.data])
                        setSearchResultSuccessHistory(searchResultSuccessHistory.concat(res.data));

                        const twentyFourHoursHistoryArray = []
                        const fiveDaysHistoryArray = []
                        response.data.list.forEach((mapValue, i) => {

                            if (i < 8) {
                                twentyFourHoursHistoryArray.push({
                                    date: new Date(mapValue.dt * 1000).toLocaleTimeString(),
                                    textDate: mapValue.dt_txt,
                                    ...mapValue.main,
                                    ...mapValue.weather[0]
                                })
                            }

                            if (i % 8 === 0) {
                                fiveDaysHistoryArray.push({
                                    date: new Date(mapValue.dt * 1000).toLocaleDateString(),
                                    textDate: mapValue.dt_txt,
                                    ...mapValue.main,
                                    ...mapValue.weather[0]
                                })
                            }
                        })
                        setTwentyFourHoursHistory(twentyFourHoursHistoryArray)
                        setFiveDaysHistory(fiveDaysHistoryArray)
                    })

            }).catch((error) => {
                setSearchingState(false);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    setSearchResultFail("City not found");
                    setSnackBarValue(true);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                    setSearchResultFail("Failed to make request");
                    setSnackBarValue(true);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    setSearchResultFail("Network Error");
                    setSnackBarValue(true);
                }
            })
    }


    const children = (
        <Switch>
            <Route path="/search">
                <Search searchCityWeather={searchCityWeather}
                    searchingState={searchingState}
                    searchInputValue={searchInputValue}
                    setSearchInputValue={setSearchInputValue}
                    searchResultSuccess={searchResultSuccess}
                    searchResultFail={searchResultFail}
                    setSearchResultFail={setSearchResultFail}
                    snackBarValue={snackBarValue}
                    setSnackBarValue={setSnackBarValue}
                    twentyFourHoursHistory={twentyFourHoursHistory}
                    fiveDaysHistory={fiveDaysHistory}
                    selectValue={selectValue}
                    setSelectValue={setSelectValue}
                />
            </Route>
            <Route path="/history">
                <History searchResultSSuccessHistory={searchResultSuccessHistory} />
            </Route>
            <Route path="/setting">
                <Setting />
            </Route>
            <Redirect to="/search" />
        </Switch>
    )


    return (
        children
    );
}

export default Main;

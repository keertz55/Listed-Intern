import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import dashboard from './assets/images/dashboard_icon.png';
import schedule from './assets/images/schedule_icon.png';
import setting from './assets/images/setting_icon.png';
import transcation from './assets/images/transaction_icon.png';
import user from './assets/images/user_icon.png';
import alert from './assets/images/search.png';
import profile from './assets/images/profile.png';
import like from './assets/images/like.png';
import person from './assets/images/person.png';
import transcations from './assets/images/transaction.png';
import revenue from './assets/images/revenue.png';
import pieChart from './assets/images/Pie Chart.png';
import bottomArrow from './assets/images/bottomarrow.png';

const Dashboard = () => {
    ChartJS.register(
        Title, Tooltip, LineElement, Legend,
        CategoryScale, LinearScale, PointElement, Filler
    );
    const data = {
        labels: ["", "Week1", "Week2", "Week3", "Week4"],
        datasets: [{
            label: "User",
            data: [100, 200, 300, 400, 410, 400, 300, 200, 150, 200, 300, 400, 420, 440, 400, 300, 200, 180, 200, 250],
            backgroundColor: 'transparent',
            borderColor: "#9BDD7C",
            pointBorderColor: 'transparent',
            pointerBorderWidth: 4,
            tension: 0.5
        },
        {
            label: "Guest",
            data: [200, 250, 180, 170, 160, 180, 200, 250, 230, 220, 190, 170, 160, 155, 145, 170, 180, 190],
            borderColor: "blue",
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointerBorderWidth: 4,
            tension: 0.5
        }]
    };
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 450,
                ticks: {
                    stepSize: 100,
                    callback: (value) => value + 100
                },
                grid: {
                    borderDash: [10]
                }
            }
        }

    };
    return (
        <div class="h-screen grid grid-cols-6 dashboard">
            <div className="mr-6 ml-6 grid-cols-1 flex items-center justify-center">
                <div className="sidmenu">
                    <div className="pl-6 text-left" style={{ height: "100%" }}>
                        <div className="flex flex-col relative" style={{ height: "100%" }}>
                            <div>
                                <h1 className="pt-6 pb-6">Board.</h1>
                                <div className="flex mb-6">
                                    <img src={dashboard} width="12px" height="12px" />
                                    <p className="active">Dashboard</p>
                                </div>
                                <div className="flex mb-6">
                                    <img src={transcation} width="12px" height="12px" />
                                    <p>Transactions</p>
                                </div>
                                <div className="flex mb-6">
                                    <img src={schedule} width="12px" height="12px" />
                                    <p>Schedules</p>
                                </div>
                                <div className="flex mb-6">
                                    <img src={user} width="12px" height="12px" />
                                    <p>Users</p>
                                </div>
                                <div className="flex mb-6">
                                    <img src={setting} width="12px" height="12px" />
                                    <p>Settings</p>
                                </div>
                            </div>
                            <div className="absolute sidmenu-bottom mb-6">
                                <p className="mb-5">Help</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mr-6 ml-6 col-span-5 main-content">
                <div className="m-6 ">
                    <div className="m-6 flex justify-between">
                        <div className="title">
                            Dashboard
                        </div>
                        <div className="header-menu flex">
                            <div>
                                <label class="relative block">
                                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full py-2 pl-9 pr-3 sm:text-sm" placeholder="Search" type="text" name="search" />
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                                    </span>
                                </label>
                            </div>
                            <img className="alert" src={alert} />
                            <img className="profile-img" src={profile} />
                        </div>
                    </div>
                </div>
                <div className="ml-3 mr-3 grid grid-cols-4">
                    <div className="p-4 card">
                        <div className="revenue w-full">
                            <div className="flex justify-end mr-6 pt-6">
                                <img src={revenue} />
                            </div>
                            <div className="mt-4 pl-6 pb-6 text-left">
                                <p>Total Revenues</p>
                                <h2>$2,129,430</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 card">
                        <div className="transcation w-full">
                            <div className="flex justify-end mr-6 pt-6">
                                <img src={transcations} />
                            </div>
                            <div className="mt-4 pl-6 pb-6 text-left">
                                <p>Total Transactions</p>
                                <h2>1,520</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 card">
                        <div className="like w-full">
                            <div className="flex justify-end mr-6 pt-6">
                                <img src={like} />
                            </div>
                            <div className="mt-4 pl-6 pb-6 text-left">
                                <p>Total Likes</p>
                                <h2>9,721</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 card">
                        <div className="user w-full">
                            <div className="flex justify-end mr-6 pt-6">
                                <img src={person} />
                            </div>
                            <div className="mt-4 pl-6 pb-6 text-left">
                                <p>Total Revenues</p>
                                <h2>892</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-6 mr-6 grid grid-cols-1">
                    <div className="pr-6 linechart p-3">
                        <div className="flex justify-between pl-6 pr-6">
                            <div>
                                <p className="title" style={{textAlign:"initial"}}>Activities</p>
                                <div className="flex">
                                <p className="desc pr-2">May - June 2021</p>
                                <img className="arrowimg" src={bottomArrow} width="8px" height="8px" />
                                </div>
                            </div>
                            {/* <div className="flex justify-between">
                                <div>
                                    <span className="ledge1"></span>
                                    Guest
                                </div>
                                <div>
                                    <span className="ledge2"></span>
                                    User
                                </div>
                            </div> */}
                        </div>
                        <Line data={data} options={options}></Line>
                    </div>
                </div>
                <div className="m-6 grid grid-cols-2">
                    <div className="pr-6">
                        <div className="bottom-card">
                            <div className="flex justify-between p-6">
                                <div>
                                    <p className="title">Top products</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="desc">May - June 2021</p>
                                    <img className="arrowimg" src={bottomArrow} width="8px" height="8px" />
                                </div>
                            </div>
                            <div className="flex justify-around p-6">
                                <div>
                                    <img src={pieChart} />
                                </div>
                                <div className="text-left">
                                    <div >
                                        <div className="flex items-center">
                                            <span className="value1"></span>
                                            <p className="name">Basic Tees</p>
                                        </div>
                                        <p className="value">55%</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center ">
                                            <span className="value2"></span>
                                            <p className="name">Custom Short Pants</p>
                                        </div>
                                        <p className="value">31%</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <span className="value3"></span>
                                            <p className="name">Super Hoodies</p>
                                        </div>
                                        <p className="value">14%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6">
                        <div className="bottom-card pb-6">
                            <div className="flex justify-between p-6">
                                <div>
                                    <p className="title">Today’s schedule</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="desc">See All</p>
                                    <img className="arrowimg rotate" src={bottomArrow} width="8px" height="8px" />
                                </div>
                            </div>
                            <div className="p-6 ">
                                <div className="meeting text-left meetline">
                                    <p className="pl-4 title">Meeting with suppliers from Kuta Bali</p>
                                    <p className="pl-4 time">14.00-15.00</p>
                                    <p className="pl-4 address">at Sunset Road, Kuta, Bali </p>
                                </div>
                                <div className="mt-6 meeting text-left meetline2">
                                    <p className="pl-4 title">Check operation at Giga Factory 1</p>
                                    <p className="pl-4 time">18.00-20.00</p>
                                    <p className="pl-4 address">at Central Jakarta </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
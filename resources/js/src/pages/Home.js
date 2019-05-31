import React, {Component} from 'react'
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Posts from "../components/Posts";
import RightBar from "../components/RightBar";


class Home extends Component {


    render() {
        return (
            <div className={'main'}>
                <div className={'my_navbar'}>
                    <Navbar/>
                </div>
                <div className={'my_content'}>
                    <Posts/>
                </div>
                <div className={'my_right_bar'}>
                    <RightBar/>
                </div>
            </div>
        )
    }
}

export default Home

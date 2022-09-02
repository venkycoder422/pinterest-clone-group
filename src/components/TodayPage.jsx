import React from 'react'
import "../css/TodayPage.css"
import second from "../img/second.jpg"
import first from "../img/first.jpg"
import third from  "../img/third.jpg";
import forth from "../img/firth.jpg";
import fifth from "../img/fitth.jpg";
import sixth from "../img/sixth.jpg";
import seven from "../img/seventh.jpg";
import eight from "../img/eight.jpg"
import nine from "../img/nine.jpg";
import ten from "../img/ten.jpg";
import eleven from "../img/eleven.jpg";
import twelve from "../img/twelve.jpg";
 export default function TodayPage() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
        <h2>{date}</h2>

        <div className='today_main'>
            <div className='today_main_container'>
                <div>
                    <img src={first} alt='snow' />
                    <p>Blesses Moments</p>
                    <h3>Happy Ganesh Chathurthi!</h3>
                </div>

                <div>
                    <img src={second} alt = "" />
                    <p>Tasty Today</p>
                    <h3>Desi  Food Series-Punjab</h3>
                </div>
                
                <div>
                    <img src = {third} alt = "snow" />
                    <p>Glam Time</p>
                    <h3>Date night dresses</h3>
                </div>
                <div>
                    <img src = {forth} alt = "snow" />
                    <p>Mesmerixing India</p>
                    <h3>Explore the beauty of East India.</h3>
                </div>


                <div>
                    <img src = {fifth} alt = "snow" />
                    <p>A Little Festive Upgrade.</p>
                    <h3>Revamp Your Wardrobe</h3>
                </div>
                <div>
                    <img src = {sixth} alt = "snow" />
                    <p>Sweet Treat</p>
                    <h3>Delious Upside Down Cakes</h3>
                </div>

                <div>
                    <img src = {seven} alt = "snow" />
                    <p>Tasty Today</p>
                    <h3>Desi  Food Series-Punjab</h3>
                </div>
                <div>
                    <img src = {eight} alt = "snow" />
                    <p>Glam Time</p>
                    <h3>Date night dresses</h3>
                </div>

                <div>
                    <img src = {nine} alt = "snow" />
                    <p>Really Lit!</p>
                    <h3>Spicy Today!</h3>
                </div>
                <div>
                    <img src = {ten} alt = "snow" />
                    <p>Ayudrevdic cooking..</p>
                    <h3>Eat your way to balanced Body.</h3>
                </div>

                <div>
                    <img src = {eleven} alt = "snow" />
                    <p>Sweet Treat</p>
                    <h3>Delious Upside Down Cakes</h3>
                   
                </div>
                <div>
                    <img src = {twelve} alt = "snow" />
                    <p>A wardrobe Classic</p>
                    <h3>Ikat Prints Always So cool.</h3>
                </div>

            </div>

        </div>
        <div className='today_last'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuElBpM1Z4kqdcegU3VYCZrImLL3Ye2AOCEw&usqp=CAU' alt = "snow" />
            <p>That's all for today!</p>
            <h3>Come back tomorrow for more inspiration</h3>
            <button className='goto_homefeed'>Go to home feed</button>
        </div>
    </div>
  )
}

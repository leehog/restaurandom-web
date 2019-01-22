// @flow
import React, {Component} from 'react'
import axios from 'axios'
import {apiKey} from '../../apikey'

type Genre = [
    {
        title: string,
        img: string
    }
]

type Genres = Genre[]

type genreListProps = {
    genres: Genres,
    chooseCategory: string => void
}
export function GenreList(props: genreListProps): any {
    return (
        <React.Fragment>
            {
                genres.map((obj, i) => 
                    <div className="genre" key={i} onClick={() => props.chooseCategory(obj.title)}>
                        <img src={obj.img} className="genre-img"/>
                        <h3 className="genre-title">{obj.title}</h3>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export const genres = [
    {
        "title": "hamburgers",
        "img": "https://img.buzzfeed.com/buzzfeed-static/static/2014-11/13/10/campaign_images/webdr12/burger-burger-burger-burger-2-9814-1415891685-26_dblbig.jpg"
    },
    {
        "title": "indian",
        "img": "https://media-cdn.tripadvisor.com/media/photo-s/10/24/98/99/veg-and-non-veg-halal.jpg"
    }
]

class Sidebar extends Component<any, { genres: Genres, chosenCategory: string, sliderValue: number, lat: any, lon: any }> {
    constructor(props: any) {
        super(props)
        this.state = {
            genres: [],
            chosenCategory: "",
            sliderValue: 500,
            lat: "",
            lon: ""
        }
    }

    componentDidMount() {
        this.setState({
            genres
        })
        navigator.geolocation.getCurrentPosition(location => {
            console.log(location)
            this.setState({
              lat: location.coords.latitude,
              lon: location.coords.longitude,
            })   
        })
    }

    chooseCategory(cat: string) {
        this.setState({
            ...this.state,
            chosenCategory: cat
        })
    }

    searchQuery() {
        if(this.state.lat) {
            console.log("running query")
            const { lat, lon, sliderValue, chosenCategory } = this.state
            axios.get('http://localhost:5000/find/'+lat+','+lon+'/'+sliderValue+'/'+chosenCategory).then(res => {
                console.log(res)
            })
        }      
    }

    onSliderChange(e) {
        this.setState({
            ...this.state,
            sliderValue: e.target.value
        })
    }

    render() {
        const {genres} = this.state
        return (
            <React.Fragment>
                <GenreList 
                    genres={genres} 
                    chooseCategory={cat => this.chooseCategory(cat)}
                />
                <p>Chosen category: { this.state.chosenCategory ? <span className="chosen-cat">{this.state.chosenCategory}</span> : ""}</p>
                <p class="range-field">
                    <input type="range" id="test5" min="500" max="3000" value={this.state.sliderValue} onChange={(e) => this.onSliderChange(e)}/>
                    <span>Radius: {this.state.sliderValue} meters</span>
                </p>

                <button className="waves-effect waves-light btn" onClick={() => this.searchQuery()}>Find restaurant</button>
            </React.Fragment>
        )
    }
}

export default Sidebar
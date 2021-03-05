import react from "react";
import axios from "axios";


export default class Hospital extends react.Component {

    constructor() {
        super();
        this.state = {
            locations: [],
            specialisms: []
        }
    }

    componentDidMount() {
        this.getData();
        this.getSpecialisms();
    }

    getSpecialisms() {
        axios.get('https://localhost:44390/api/specialisms')
            .then(response => {
                const hospitalData = response.data;
                this.setState({specialisms: hospitalData});
            });
    }

    getData() {
        axios.get('https://localhost:44390/api/locations')
            .then(response => {
                const hospitalData = response.data;
                this.setState({locations: hospitalData});
            });
    }


    render() {
        return (
            <div className="container">
                <p>
                    {
                        this.state.locations.map (
                            location => <div key={location.id}> {location.hospitalName} </div>
                        )
                    }
                </p>
                <p>
                    {
                        this.state.specialisms.map(
                            spec => <div key={spec.id}> {spec.specialityName} </div>
                        )
                    }
                </p>
            </div>
        );
    }
}


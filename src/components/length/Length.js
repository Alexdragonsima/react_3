import React from "react";

class Length extends React.Component {
    constructor(props) {
        super(props);
        this.state = { length: 10 };
    }
    increase = () => {
        this.setState({ length: this.state.length += 20 });
    }
    reset = () => {
        this.setState({ length: 10 });
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>Incerease</button>
                <button onClick={this.reset}>Reset</button>
                {/* <button>Increase</button>
                <button>Reset</button> */}
                <div>
                    <input type="size" size={this.state.length} />
                </div>
            </div>
        )
    }
}

export default Length;
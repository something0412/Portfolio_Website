// used style from App.css

function Breaker(props: { text: string }) {
    return (
        <div className="breaker">
            <p className="hashtag">#</p>
            <p className="breaker-text">{props.text}</p>
            <div className="breaker-line"></div>
        </div>
    );
}

export default Breaker;

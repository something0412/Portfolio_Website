import "../styles/footer.css";
import { icons } from "../information/statics";
import { links } from "../information/data";

interface MediaItem {
    icon: string;
    url: string;
}

function Footer() {
    const medias = [
        {
            icon: icons.github,
            url: links.github,
        },
        {
            icon: icons.discord,
            url: links.discord,
        },
        {
            icon: icons.instagram,
            url: links.instagram,
        },
        {
            icon: icons.linkedin,
            url: links.linkedin,
        },
    ];
    return (
        <div className="footer-area">
            <div className="email-div">
                <p className="text">I'd love to connect and collaborate</p>
                <a href="mailto:bill2682004@gmail.com">
                    <p className="email">bill2682004@gmail.com</p>
                </a>
            </div>
            <div className="media-div">
                <p className="text">Media</p>
                <div className="media-icons">
                    {medias.map((media: MediaItem, i) => (
                        <div key={i} className="media-icon-container">
                            <a href={media.url} target="blank">
                                <img
                                    className="media-icon"
                                    src={media.icon}
                                    alt="media-icon"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <p className="copyright">
                <img
                    className="copyright-icon"
                    src={icons.copyright}
                    alt="copyright-icon"
                />{" "}
                Phuoc Vinh Le 2025
            </p>
        </div>
    );
}

export default Footer;

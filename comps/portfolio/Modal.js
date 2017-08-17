
const Modal = (props) => (
  <div className="dark fullscreen container" onClick={props.onClick}>

    <a href="#" className="close">✖</a>
    <img src={props.image} alt={props.name} />
    <div className="infos">
      <p>
        <a href={props.url || "#"} target="_blank">{props.name} ➡</a>
      </p>
      <p className="descr">{props.description}</p>
      <div>
        {props.tags.map(tag => (
          <p key={tag} className="tag">{tag}</p>
        ))}
      </div>

    </div>
    <style jsx>{`
      .fullscreen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 100;
        color: var(--blue)
      }
      .dark {
        background-color: rgba(0,0,0,0.8)
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px
      }
      .infos {
        display: flex;
        flex-direction: column;
        margin: 10px
      }
      .descr {
        color: var(--white)
      }
      .tags {
        display: flex;
      }
      .tag {
        background-color: var(--yellow);
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        color: black;
        display: inline-block
      }
      img {
        width: 100%
      }
      .close {
        align-self: flex-end;
        padding: 5px;
        margin: 0;
        margin-right: 5%;
        font-size: 2em;
        color: var(--yellow);
        cursor: pointer
      }
      @media only screen and (min-width: 800px) {
        img {
        width: 70%;
        min-width: 800px;
        max-width: 1200px
        }
      }
    `}</style>
  </div>
)

export default Modal

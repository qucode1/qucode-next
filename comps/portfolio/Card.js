const Card = (props) => (

  <div className="card" onClick={(e) => props.onClick(e, props.project)}>
    <div className="corner tl"></div>
    <div className="corner tr"></div>
    <div className="corner br"></div>
    <div className="corner bl"></div>
    <div className="wrapper">
      <img src={props.project.image} alt={props.project.name} />
    </div>
    <style jsx>{`
      .card {
        position: relative;
        box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60vW;
        height: 34.625vW;
        max-width: 297px;
        max-height: 170.13px;
        margin: 5px;
        cursor: pointer
      }
      .card:hover .corner, .card:focus .corner {
        width: 30.2vW;
        height: 17.35vW;
        max-width: 149px;
        max-height: 86px;
      }
      .corner {
        position: absolute;
        width: 0vW;
        height: 0vW;
        max-width: 30px;
        max-height: 30px;
        background-color: var(--yellow);
        transition: 0.25s ease-in
      }
      .tl {
        top: 0;
        left: 0;
      }
      .tr {
        top: 0;
        right: 0;
      }
      .br {
        bottom: 0;
        right: 0
      }
      .bl {
        bottom: 0;
        left: 0
      }
      .wrapper {
        width: 58vW;
        height: 32.625vW;
        max-width: 290px;
        max-height: 163.125px;
        background-color: lightgrey;
        z-index: 2;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center
      }
      img {
        height: 100%
      }
    `}</style>
  </div>
)

export default Card

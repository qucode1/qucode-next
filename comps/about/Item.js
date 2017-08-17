const Item = (props) => (
  <div className={props.class}>
    {props.children}
    <style jsx>{`
      .title, .content {
        padding: 0 5px
      }
      .title {
        flex: 1;
        font-weight: bold
      }
      .content {
        flex: 3;
        display: flex;
        flex-wrap: wrap
      }
      @media only screen and (min-width: 600px) {
        .title {
          padding: 5px;
          border-right: 2px solid rgb(13, 100, 148);
          color: white;
          font-weight: normal
          text-align: right;
          letter-spacing: 1.5px;
          background-image: linear-gradient(to bottom, rgb(54, 173, 239), rgb(32, 161, 232));
        }
        .content {
          padding: 5px
        }
      }
    `}</style>
  </div>
)

export default Item

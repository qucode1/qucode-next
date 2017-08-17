export const headerStyles = `
      .bg-image1 {
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        background-image: url("/static/bg.jpg");
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        width: 100%;
        height: 100%;
        filter: grayscale(100%) brightness(50%)
      }
      .bg-gradient {
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        background-image: linear-gradient(to bottom right, rgba(31, 164, 237, 0.78), rgba(7, 27, 37, 0.84));
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        width: 100%;
        height: 100%;
      }
      nav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
        background-color: rgb(31, 164, 237);
        min-height: 70px;
        height: auto;
        width: 100%;
        position: fixed;
        top: 0;
        font-size: 1.5em;
        z-index: 50;
        overflow: hidden
      }
      .topNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: #fff;
        padding: 0 10px 0;
      }
      .links ul li {
        list-style: none;
        display: block;
        margin: 0 0 10px;
        text-align: center;
      }
      .links ul {
        padding: 0;
        margin: 0;
      }
      .links ul li a {
        color: rgba(255, 255, 255, .6);
        cursor: pointer;
        text-decoration: none;
      }
      .links ul li a.active {
        color: #fff
      }
      .logo p {
        margin: 0;
      }
      .links {
        display: block;
        height: 180px;
        padding: 10px 0;
        transition: height .3s;
        overflow: hidden;
        visibility: visible;
        background-image: linear-gradient(to bottom, rgb(78, 192, 255), rgb(51, 169, 234));
        border-top: 1px solid rgb(5, 114, 175);
      }
      #collapseNavBtn {
        display: inline-block;
        padding-right: 15px
      }
      #collapseNavBtn p {
        padding: 0 5.25px
      }
      #collapseNavBtn p, #collapseNavBtn p i {
        cursor: pointer;
      }
      .links.hidden {
        visibility: hidden;
        height: 0;
        padding: 0;
      }
      .toggle-menu-button {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        cursor: pointer;
        transition: transform 0.2s ease;
        user-select: none
      }
      .toggle-menu-button:hover, .toggle-menu-button:focus {
        transform: rotateZ(90deg);
      }
      @media only screen and (min-width: 900px){
        nav {
          height: 70px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center
        }
        .logo, .links, .links ul li {
          display: inline-block;
          margin: 0;
          padding: 0;
        }
        .links ul li {
          display: flex;
          align-items: flex-end
        }
        #collapseNavBtn {
          display: none
        }
        .links {
          height: auto;
          align-self: center;
          overflow: visible;
          height: 70px;
          background-image: none;
          border-top: none
        }
        .links ul li a {
          border-bottom: 3px solid transparent;
          padding: 0 0 16px 0;
        }
        .links ul li a.active {
          border-bottom: 3px solid #fff;
        }
        .links ul li a:hover:not(.active), .links ul li a:focus:not(.active) {
          border-bottom: 3px solid rgba(255, 255, 255, 0.9);
        }
        .links ul {
          display: flex;
          justify-content: center;
          height: 100%;
        }
        .links ul li {
          margin: 0 1.5vW;
        }
        .topNav {
          width: auto
        }
        .links.hidden {
          display: flex;
          align-items: center;
          visibility: visible;
          height: 70px;
        }
        .placeholder {
          width: 251.34px;
        }
      }
`

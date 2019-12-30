import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
#nprogress {
	pointer-events: none
}

#nprogress .bar {
	background: #8c91f5;
	position: fixed;
	z-index: 1054;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px
}

#nprogress .peg {
	z-index: 1054;
	display: block;
	position: absolute;
	right: 0;
	width: 100px;
	height: 100%;
	box-shadow: 0 0 10px #8c91f5, 0 0 5px #8c91f5;
	opacity: 1;
	-webkit-transform: rotate(3deg) translate(0, -4px);
	-ms-transform: rotate(3deg) translate(0, -4px);
	transform: rotate(3deg) translate(0, -4px)
}

#nprogress .spinner {
	display: block;
	position: fixed;
	z-index: 1054;
  top: 15px;
	right: 15px;
  @media only screen and (max-width: 768px) {
    top: 52px;
	  right: 10px
  }
}

#nprogress .spinner-icon {
	width: 18px;
	height: 18px;
	box-sizing: border-box;
	border: 2px solid transparent;
	border-top-color: #8c91f5;
	border-left-color: #8c91f5;
	border-radius: 50%;
	-webkit-animation: nprogress-spinner .4s linear infinite;
	animation: nprogress-spinner .4s linear infinite
}

.nprogress-custom-parent {
	overflow: hidden;
	position: relative
}

.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
	position: absolute
}

@-webkit-keyframes nprogress-spinner {
	0% {
		-webkit-transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg)
	}
}

@keyframes nprogress-spinner {
	0% {
		transform: rotate(0)
	}
	100% {
		transform: rotate(360deg)
	}
}

@font-face {
  font-family: 'CSChatThaiUI';
  font-display: swap;
  src: local('CSChatThaiUI'),
    url('/static/fonts/CSChatThaiUI/CSChatThaiUI.eot'),
    url('/static/fonts/CSChatThaiUI/CSChatThaiUI.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/CSChatThaiUI/CSChatThaiUI.woff') format('woff'),
    url('/static/fonts/CSChatThaiUI/CSChatThaiUI.ttf') format('truetype'),
    url('/static/fonts/CSChatThaiUI/CSChatThaiUI.svg#cs_chatthairegular') format('svg');
  font-weight: normal;
  font-style: normal;
}
body {
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-tap-highlight-color: transparent;
}
* {
  animation-duration: 0s !important;
  .ant-spin-spinning {
    .ant-spin-dot-spin {
      animation-duration: 1s !important;
      i {
        animation-duration: 1s !important;
      }
    }
  }
  .anticon {
    svg {
      animation-duration: 1s !important;
    }
  }
  &:focus {
    outline: none;
  }
}
a:focus {
  text-decoration: none;
}
a.ant-btn {
  line-height: 28px;
}
div.ant-form-item-extra {
  padding: 3px 0;
  color: #fa8c16;
}
div.ant-form-item-explain {
  padding: 3px 0;
  color: #fa541c;
}
.ant-form-item textarea.ant-input {
  margin-bottom: 0px;
}
.ant-upload.ant-upload-drag {
  height: 101px;
}
.ant-upload.ant-upload-drag .ant-upload {
  height: 101px;
  padding: 5px 0;
}
.ant-upload.ant-upload-drag p.ant-upload-drag-icon {
  margin-bottom: 0px;
  .anticon {
    font-size: 28px;
  }
}
.ant-layout-header {
  background: #00E
}
.ant-upload.ant-upload-drag p.ant-upload-text {
  color: #2c3c45;
  font-size: 14px;
}
.ant-upload-list-picture-card {
  justify-content: left;
  display: flex;
  > .ant-upload-list-item {
    flex: 1;
    max-width: 40%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 2px;
    border: 1px solid #eaedf3;
    border-radius: 2px;
  }
}
.ant-select-dropdown {
  background-color: #f8f8f8;
  img {
    width: 25px;
    padding: 1px;
    background: #fff;
    border: 1px solid #96aecb;
    box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
    border-radius: 50%;
    position: relative;
    bottom: 2px;
  }
}
.ant-menu-item:active, .ant-menu-item:focus {
  background: transparent;
}
.ant-menu-submenu-popup {
  z-index: 1051;
  position: fixed;
  border-radius: 0px;
}
.ant-menu-submenu {
  > .ant-menu {
    border-radius: 0px;
    li {
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverBg};
      }
    }
  }
}
`

import React from "react"
import Modal from "react-responsive-modal"

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sign: false,
      login: false,
    }
  }

  onOpenModal = () => {
    this.setState({ sign: true })
  }

  onOpenModalLogin = () => {
    this.setState({ login: true })
  }

  onCloseModal = () => {
    this.setState({ sign: false })
  }

  onCloseModalclose = () => {
    this.setState({ login: false })
  }
}
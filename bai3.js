import React from "react";

class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dulieu: [],
      item1: {}
    };
  }
  componentDidMount() {
    const apiUrl =
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dulieu: data.results });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.dulieu.map((cau) => (
            <li key={cau.question}>
              <label>Câu hỏi :</label>
              {cau.question}
              <label>Câu trả lời :</label>
              {cau.correct_answer}
              {cau.incorrect_answers}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default myComponent;

import PropTypes from "prop-types";
export default function UserFunction({name, age , changeName}) {
    return (
      <>
        <p>Pozdrav, moje ime je {name} i imam {age} godina</p>
        <input type="text" onChange={changeName} value={name}/>
      </>
    )
}

UserFunction.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func
};

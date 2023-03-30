import {connect} from "redux"
import MyForm from "../components/MyForm"
import CardSection from "../components/CardSection"
import MyNavbar from "../components/navbar"
import { controlInputs } from "../ReduxData/actions/actions"


const mapStateToProps=()=>{

}
const mapDispatchToProps=(dispatch)=>{
    ControlInputsHandler:(data)=>dispatch(controlInputs(data))
}

export default connect(mapDispatchToProps,mapStateToProps)(MyForm)
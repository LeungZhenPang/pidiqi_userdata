import Vue from 'vue'
import {
    Button,
    ButtonGroup,
    Input,
    Table,
    TableColumn, 
    Loading, 
    Dialog, 
    Form, 
    FormItem, 
    Select, 
    Option, 
    Switch,
    Message,
    MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
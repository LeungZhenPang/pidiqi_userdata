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
    MessageBox,
    DatePicker,
    Autocomplete,
    CheckboxGroup,
    Checkbox
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
Vue.use(DatePicker)
Vue.use(Autocomplete)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
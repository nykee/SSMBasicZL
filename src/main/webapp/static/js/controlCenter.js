/**
 * Created by Administrator on 2017/6/29.
 */
// import 'element-ui/lib/theme-default/index.css'
import {Upload,Menu,DatePicker} from 'element-ui'


var app = new Vue({
    el:'#main-content',
    data(){
        return {
            show_manage:false,
            show_upload:true,
            show_charts:false,
            testDate:'',
            fileList: [],
            gender: '',
            theads: [
                {colName: '序号'},
                {colName: '患者名称'},
                {colName: '患者年龄'},
                {colName: '患者性别'},
                {colName: '患者病症'},
                {colName: '测试日期'},
                {colName: '测试时长'},
                {colName: '操作'}

            ],
            persons: [
                {
                    chked: false,
                    name: 'tom1',
                    age: 22,
                    gender: 'male',
                    disease: 'acl',
                    testDate: '2017/06/20',
                    testDuration: 3600
                },
                {
                    chked: false,
                    name: 'tom2',
                    age: 21,
                    gender: 'female',
                    disease: 'acl',
                    testDate: '2017/06/20',
                    testDuration: 3600
                },
                {
                    chked: false,
                    name: 'tom3',
                    age: 23,
                    gender: 'female',
                    disease: 'acl',
                    testDate: '2017/06/20',
                    testDuration: 3600
                },
                {
                    chked: false,
                    name: 'tom4',
                    age: 24,
                    gender: 'male',
                    disease: 'acl',
                    testDate: '2017/06/20',
                    testDuration: 3600
                },
                {
                    chked: false,
                    name: 'tom5',
                    age: 25,
                    gender: 'male',
                    disease: 'acl',
                    testDate: '2017/06/20',
                    testDuration: 3600
                },

            ],

        }
        },
    methods:{
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleError(err, file, fileList){
            console.log(err);
            console.log(file,fileList);
            this.$notify.error({
                    title: '上传失败',
                    message: '上传失败',
                   });

        },
        handleSuccess(res,file,fileList){
            console.log(res,file,fileList);

            this.$notify({
                title: '上传成功',
                message: '上传成功',
                type:'success'
            });
        },
        handleUploading(file,fileList){
            console.log(fileList);
            console.log('文件名称:'+file.name+'文件路径'+file.url);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
            console.log('文件名称:'+file.name+'文件路径'+file.url);
        },
        handlePreview(file) {
            console.log(file);

            this.$notify({
                title: '警告！',
                message: '此文件已从上传列表中删除',
                type: 'warning'
            });
        },

        deleteOne:function (index) {
            if(this.persons[index].chked===true){
                this.persons.splice(index, 1)
            }
            else {
                return false;
            }

        },
        deleteAll:function () {
            for(let i=0;i<this.persons.length;i++){
//                    console.log(this.persons[i].chked);
                while(this.persons[i].chked ===true){
                    this.persons.splice(i,1)
                }
            }
        },
        chkOne:function (index) {
            this.persons[index].chked = true
        },
        selectAll:function () {
            for(let i=0;i<this.persons.length;i++){
//                    console.log(this.persons[i].chked);
                this.persons[i].chked =((this.persons[i].chked ===false) ?true:false);

            }
        },
        edit:function () {

        },
        changeActive1:function () {
            if(this.show_manage ===true){
                return 0
            }
            else{
                this.show_manage =true;
                this.show_upload=this.show_charts=false;
            }

        },
        changeActive2:function () {
            if(this.show_upload ===true){
                return 0
            }
            else{
                this.show_upload =true;
                this.show_manage=this.show_charts=false;
            }

        },
        changeActive3:function () {
            if(this.show_charts ===true){
                return 0
            }
            else{
                this.show_charts =true;
                this.show_upload=this.show_manage=false;
            }

        }

    },
    components:{
        Upload,Menu,DatePicker
    }


});




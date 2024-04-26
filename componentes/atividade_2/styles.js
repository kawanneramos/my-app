import{ StyleSheet }from 'react-native';

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:20,
        alignItems:'center',  
        padding: 8,
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
    },
    mensagem:{
        fontSize:25,
        margin:10,
        color:'purple',
    },
    viewmensagem:{
        borderWidth:4,
        borderColor:'#733ba1',
        borderRadius:20,
    },
});

export default styles;
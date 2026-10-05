const calulateDate =()=>{

    const joiningDatestr = document.getElementById("jdate").value
    console.log(joiningDatestr)

    //date obj
    const joiningDate = new Date(joiningDatestr)
    console.log(joiningDate)

    const today = new Date()
    console.log(today)

    const diff = today - joiningDate;
    console.log("diff",diff)

    const ans = diff / (1000*60*60*24)
    console.log("ans",ans)
    const ans1 = document.getElementById("ans")
    if(Math.floor(ans)>=90){
        ans1.innerText = "eligible"
        ans1.style.color = "green"
    }
    else{
        ans1.innerText = "not eligible"
        ans1.style.color = "red"
    }

}
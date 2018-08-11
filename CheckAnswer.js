$.getJSON("questions.json",function(data){ Questions=data });
var User = JSON.parse(localStorage.getItem("UserDetails"));
var Questions=[]

var OptionToNum = function(Opt) // to use convert Alpha options to numeric options 
{
    if(Opt=='A') return 0;
    else if (Opt=='B') return 1;
    else if(Opt=='C') return 2;
    else if(Opt=='D')
    return 3;
    else if(Opt=='E')
    return 4;
}

var CheckAnswerShow =function() // Onclick event of button #CheckAnswer
{
    
    for (let i = 1; i <Questions.length; i++)  // loop to create tables based on the number of Questions
    {   
        
        let container = $("<div class = 'container' id='Row"+i+"'></div>");
        let row = $("<div class = 'row' id='ShowQuestion"+i+"'></div>");
        let row2 = $("<div class = 'row'  id='WrongShowAnswer"+i+"'></div>");
        let row3 = $("<div class = 'row'  id='CorrectShowAnswer"+i+"'></div>");
        

        $(container).append(row);
        $(container).append(row2);
        $(container).append(row3);
        
        $('#GRID').append(container);
    }

    for(let i=1; i<Questions.length; i++)
    {
        $('#ShowQuestion'+i).html(Questions[i].Question);
        if(Questions[i].CorrectOpt==User.Score[i])
        {   
            let OptNum= OptionToNum(Questions[i].CorrectOpt);
            console.log(OptNum);
            $( "#ShowQuestion"+i).after( "<div>Your Answer : </div>" );
            $('#CorrectShowAnswer'+i).html("&emsp;&emsp;"+Questions[i].Options[OptNum]+ " ----> "+"Correct");
            $('#CorrectShowAnswer'+i).css("color","green");
        }
        else
        {
            let CON = OptionToNum(Questions[i].CorrectOpt); // CON = Correct Option Number
            let WON = OptionToNum(User.Score[i]); // WON = Worng Option Number
            $( "#ShowQuestion"+i).after( "<div>Your Answer : </div>" );
            $('#WrongShowAnswer'+i).html("&emsp;&emsp;"+Questions[i].Options[WON]+ " ----> "+"Worng");
            $('#WrongShowAnswer'+i).css("color","red");
            $( "#WrongShowAnswer"+i).after( "<div>Correct Answer : </div>" );
            $('#CorrectShowAnswer'+i).html("&emsp;&emsp;"+Questions[i].Options[CON]+ "----> Is the Right Answer");

        }
    }

}

export function addQuestionOptions(formik){

    fetch(`http://localhost:8080/super/${formik.values.quizName}`)
        .then((response) => response.json())
        .then((quiz) => {
            if(quiz.length === 0){
                fetch("http://localhost:8080",
                {
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        quizName: formik.values.quizName,
                        question: formik.values.question,
                        options: formik.values.options
                    })
                })
            }else{
                fetch(`http://localhost:8080/super/${formik.values.quizName}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        question: formik.values.question,
                        options: formik.values.options
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    })
            }

        })
} 
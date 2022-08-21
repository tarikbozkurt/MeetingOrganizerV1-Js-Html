function getMeetingTitle() {
    const meetingCard = document.getElementById('meetingCardRow');

    fetch("https://trkbozkurt.pythonanywhere.com/api/list/")
        .then(response => response.json())
        .then(responseJson => {
            responseJson.forEach(element => {


                meetingCard.innerHTML += `
                <div class="col justify-content-center mb-5">

                <div class="card p-2">

                <h5 class="text">${element['title']} - ${element['meeting_date']}</h5>
    
                <span class="text">${element['meeting_start_time']} - ${element['meeting_end_time']}</span>
    
    
                <div class="d-flex justify-content-between align-items-center mt-5">
    
        
    
                    <div>
                        
                        
    
                    </div>
                    
                </div>
    
                
            </div>
            </div>
    
                `
            });
        })
}
getMeetingTitle();

function refreshData() {
    getMeetingTitle();
}

function createMeeting() {

    let data = {
        title: document.getElementById('title').value || "no value",
        meeting_date: document.getElementById('tarih').value || "no value",
        meeting_start_time: document.getElementById('baslangicT').value || "no value",
        meeting_end_time: document.getElementById('bitisT').value || "no value",

    };
    let csrftoken = Cookies.get('csrftoken');
    fetch("https://trkbozkurt.pythonanywhere.com/api/create/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "X-CSRFToken": csrftoken },

    })
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
}
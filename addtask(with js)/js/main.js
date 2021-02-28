var task_list = [
    {
        id: 1,
        description: 'Uzd.uz ni mobile ko\'rinishini tugatish',
        staff: 'Eldorbek',
        start_date: '2021-01-21',
        end_date: '2021-01-23',
        status: 'pending',
        isRejected: false,
    }
];
var defStatus = null;

getTaskList();
function getTaskList() {
    document.getElementById('pendingList').innerHTML = '';
    document.getElementById('doingList').innerHTML = '';
    document.getElementById('doneList').innerHTML = '';
    document.getElementById('rejectedList').innerHTML = '';
    for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].status === 'pending') {
            document.getElementById('pendingList').innerHTML +=
                '<h4>' + task_list[i].staff + '</h4>' +
                '<div class="mt-2">' + task_list[i].description + (task_list[i].isRejected ? '<span class="badge badge-secondary ml-3">Rejected</span>' : '') + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].start_date + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="selectStatus(event)" class="form-control mt-2">+' +
                '<option disabled selected>Select status</option>' +
                '<option value="doing">Doing</option>' +
                '<option value="done">Done</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning mt-2 px-3">Edit</button>' +
                '<button onclick="deleteTask(' + task_list[i].id + ')" type="button" class="btn btn-danger mt-2 px-3 ml-3">Delete</button>' +
                '<hr>'
        } else if (task_list[i].status === 'doing') {
            document.getElementById('doingList').innerHTML +=
                '<h4>' + task_list[i].staff + '</h4>' +
                '<div class="mt-2">' + task_list[i].description + (task_list[i].isRejected ? '<span class="badge badge-secondary ml-3">Rejected</span>' : '') + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].start_date + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="selectStatus(event)" class="form-control mt-2">+' +
                '<option disabled selected>Select status</option>' +
                '<option value="pending">Pending</option>' +
                '<option value="done">Done</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning mt-2 px-3">Edit</button>' +
                '<button onclick="deleteTask(' + task_list[i].id + ')" type="button" class="btn btn-danger mt-2 px-3 ml-3">Delete</button>' +
                '<hr>'
        } else if (task_list[i].status === 'done') {
            document.getElementById('doneList').innerHTML +=
                '<h4>' + task_list[i].staff + '</h4>' +
                '<div class="mt-2">' + task_list[i].description + (task_list[i].isRejected ? '<span class="badge badge-secondary ml-3">Rejected</span>' : '') + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].start_date + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].end_date + '</div>' +
                '<button onclick="rejectedTask(' + task_list[i].id + ')" type="button" class="btn btn-secondary mt-2 px-3">Rejected</button>' +
                '<hr>'
        } else {
            document.getElementById('rejectedList').innerHTML +=
                '<h4>' + task_list[i].staff + '</h4>' +
                '<div class="mt-2">' + task_list[i].description + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].start_date + '</div>' +
                '<div class="mt-2">' + 'start date: ' + task_list[i].end_date + '</div>' +
                '<select onchange="selectStatus(event)" class="form-control mt-2">+' +
                '<option disabled selected>Select status</option>' +
                '<option value="pending">Pending</option>' +
                '<option value="doing">Doing</option>' +
                '<option value="done">Done</option>' +
                '</select>' +
                '<button onclick="editTask(' + task_list[i].id + ')" type="button" class="btn btn-warning mt-2 px-3">Edit</button>' +
                '<hr>'
        }


    }

}

function addTask() {
    var task_id = task_list.length + 1;
    var newList = {
        id: '',
        description: '',
        staff: '',
        start_date: '',
        end_date: '',
        status: '',
    };
    var taskStaff = document.forms['myForm']['staff'].value;
    var taskDesc = document.forms['myForm']['description'].value;
    var taskStarted = document.forms['myForm']['start_date'].value;
    var taskEnded = document.forms['myForm']['end_date'].value;
    var taskStatus = document.forms['myForm']['status'].value;
    if (taskStaff !== '' && taskDesc !== '' && taskStarted !== '' && taskEnded !== '' && taskStatus !== '') {
        newList = {
            id: task_id,
            description: taskDesc,
            staff: taskStaff,
            start_date: taskStarted,
            end_date: taskEnded,
            status: taskStatus,
            isRejected: false,
        };
        task_list.push(newList);
        getTaskList();
        document.forms['myForm'].reset();
    } else {
        alert("Formani to'ldiring");
    }
}

function selectStatus(event) {
    defStatus = event.target.value;
}

function editTask(id) {
    let taskIndex = task_list.findIndex(obj => obj.id === id);
    if (defStatus !== null) {
        task_list[taskIndex].status = defStatus;
        defStatus = null;
        getTaskList();
    } else {
        alert("Statusni tanlang");
    }
}

function rejectedTask(id) {
    let taskIndex = task_list.findIndex(obj => obj.id === id);
    task_list[taskIndex].status = 'rejected';
    task_list[taskIndex].isRejected = true;
    defStatus = null;
    getTaskList();

}

function deleteTask(id) {
    let taskIndex = task_list.findIndex(obj => obj.id === id);
    task_list.splice(taskIndex, 1);
    getTaskList();
}
var date=new Date();
console.log(date.getDay());
console.log(date.getFullYear());

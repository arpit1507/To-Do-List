document.getElementById('Add').addEventListener('click',()=>{
    if (document.getElementById('delete_input')){
        if (document.getElementById('input')){
            document.querySelector('#input').remove();
            document.querySelector('#linebreak').remove();
            document.querySelector('#submit').remove();
        }
        document.querySelector('#delete_input').remove();
        document.querySelector('#delete_submit').remove();
    }
    else if (document.getElementById('input')){
        if (document.getElementById('delete_input')){
            document.querySelector('#delete_input').remove();
            document.querySelector('#delete_submit').remove();
        }
        document.querySelector('#input').remove();
        document.querySelector('#linebreak').remove();
        document.querySelector('#submit').remove();
    }
    const input= document.createElement('input');
    input.setAttribute('id','input');
    input.style='height:30px; width:1000px; padding:10px'
    const linebreak= document.createElement('br');
    const submit=document.createElement('button');
    submit.setAttribute('id','submit');
    submit.style='height:30px; width:100px; padding:10px text-justify: center;'
    submit.innerHTML='Submit';
    document.querySelector('.additiontool').appendChild(input);
    document.querySelector('.additiontool').appendChild(linebreak);
    document.querySelector('.additiontool').appendChild(submit);
    document.getElementById('submit').addEventListener('click',() =>{
        if (document.getElementById('input').value==''){
            alert('Enter Some Task');
        }
        else{
            const Task=document.getElementById('input').value;
            document.querySelector('#input').remove();
            document.querySelector('#submit').remove();
            const newtask=document.createElement('tr');
            newtask.setAttribute('id',Task);
            const p=document.createElement('td');
            const q=document.createElement('td');
            p.innerHTML=Task;
            q.innerHTML=Date();
            newtask.appendChild(p);
            newtask.appendChild(q);
            document.querySelector('#table').appendChild(newtask);
        }
    });
});

document.getElementById('Delete').addEventListener('click',()=>{
    if (document.getElementById('delete_input')){
        if (document.getElementById('input')){
            document.querySelector('#input').remove();
            document.querySelector('#linebreak').remove();
            document.querySelector('#submit').remove();
        }
        document.querySelector('#delete_input').remove();
        document.querySelector('#delete_submit').remove();
    }
    else if (document.getElementById('input')){
        if (document.getElementById('delete_input')){
            document.querySelector('#delete_input').remove();
            document.querySelector('#delete_submit').remove();
        }
        document.querySelector('#input').remove();
        document.querySelector('#linebreak').remove();
        document.querySelector('#submit').remove();
    }
    const input= document.createElement('input');
    input.setAttribute('id','input');
    input.style='height:30px; width:500px; padding:10px'
    const submit=document.createElement('button');
    submit.setAttribute('id','submit');
    submit.style='height:30px; width:100px; padding:10px text-justify: center;'
    submit.innerHTML='Submit';
    document.querySelector('.additiontool').appendChild(input);
    document.querySelector('.additiontool').appendChild(submit);
    document.getElementById('submit').addEventListener('click',() =>{
        if (document.getElementById('input').value==''){
            alert('Enter Some Task');
        }
        else{
            const Task=document.getElementById('input').value;
            document.querySelector('#input').remove();
            document.querySelector('#submit').remove();
            document.querySelector(`#${Task}`).remove();
        }
    });
})

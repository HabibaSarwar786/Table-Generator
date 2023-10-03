
const form = document.querySelector('form');
const tableGenerator = document.querySelector('.table-target');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const number1 = e.target.number1.value;
    const number2 = e.target.number2.value;
    console.log(number1,number2);
    e.target.number1.value='';
    e.target.number2.value='';
    const tamplate =`
        <table>
            <thead>
             <tr>
              <th>Number</th>
              <th>Multiply</th>
              <th>Result</th>
            </tr>
            </thead>
            <tbody>
            ${Array.from({length:number2},(emp,i)=>i+1).map(function(itr,i){
                return `
                <tr>
                    <td>${number1}</td>
                    <td>${i+1}</td>
                    <td>${number1 * (i+1)}</td>
                </tr>
                
                `
            }).join('')}
          </tbody>
        </table>
    `
    tableGenerator.innerHTML=tamplate;
})
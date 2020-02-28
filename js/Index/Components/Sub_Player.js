//print "SuPlayer" on action window
function printSubPlayer( age, icon ) {

    var age = parseInt(age);
    let alreadyOneSelected = false;

    let toPrint = `
        <div class="col-12 Sub_Player_Container">
    `;


    //function from Components/Title.js
    // toPrint += print_Title_Section_Component( 
    //     "Reproductor",
    //     "img/index/Cancionero.png",
    //     ""
    // );


    toPrint += `
            <div class="row">
                <div class="col-lg-8 offset-lg-2 col-10 offset-1 playerWrapper">
                    <div class="row playerList">
                        <div class="col-sm-5 label">
                            Listas de Reproducción
                        </div>
                        <div class="col-sm-7 listForm">
                            <select class="Player_Select_Field" onChange="print_subPlayer_playList()">
                            `;
           
                                for (let i = 1; i <= Object.keys(player_data).length; i++) {    
                                    if( player_data[i]["age"] === age ||
                                        player_data[i]["age"] === 0 ) 
                                    {
                                        toPrint += `
                                            <option value="${i}"> ${player_data[i]["name"]} </option>
                                        `;

                                        alreadyOneSelected = true;
                                    }
                                }

                            toPrint += `  
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-12 Player_Select_Modal_Container">
                        </div>
                        <div class="col-sm-12 col-12 Player_Select_PlayList">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let action_window = document.getElementsByClassName("Index_Ventana_Audio")[0];
    action_window.innerHTML = toPrint;  

    //mark as selected, select first option
    document.getElementsByClassName("Player_Select_Field")[0].options[0].selected = true;

    //funcion in the same script
    print_subPlayer_playList();
}


//get selected playList and print list
function print_subPlayer_playList() {
    //clear player view
    document.getElementsByClassName('Player_Select_Modal_Container')[0].innerHTML = "";

    //set some variables
    let selected_field = document.getElementsByClassName("Player_Select_Field")[0] ; 
    let selected_value = selected_field.options[ selected_field.selectedIndex ].value;

    let toPrint = ``;

    for (let i = 1; i <= Object.keys(player_data[selected_value]["playList"]).length; i++) {    
        let key = Object.keys( player_data[selected_value]["playList"] )[i-1];

        let action = ( player_data[selected_value]['playList'][key]['type'] === 'audio' ) 
                        ? `modal_audio_set(
                            ${selected_value},
                            ${key},
                            this
                        ); active_subPlayer_element(this)` 
                        : `modal_video_set(this)`;

        let type = ( player_data[selected_value]['playList'][key]['type'] === 'audio' ) 
                        ? `<i class="fas fa-music"></i>` 
                        : `<i class="fas fa-film"></i>`;

        toPrint += `
            <div 
                class="row list_Element audio_${selected_value}_${key}"
                data-target="Player_Select_Modal_Container"
                data-type="audio"
                onClick="${action}"
            >
                
                <div class="col-2 type">${type}</div>
                <div class="col-10 info">
                    <span>
                        ${player_data[selected_value]["playList"][i]["songName"]} 
                    </span> <br>
                    ${player_data[selected_value]["playList"][i]["artist"]}                        
                </div> 
           </div>
        `;
    }

    let action_window = document.getElementsByClassName("Player_Select_PlayList")[0];
    action_window.innerHTML = toPrint;  

    //for audio elements simulate click on first element to trigger "onClick" function
    let firstElement = document.getElementsByClassName("list_Element")[0];
    if(firstElement.dataset.type === 'audio'){
        firstElement.click();    
    }
}


//deactive all playList elements and active selected element
function active_subPlayer_element( elm ) {
    let elmList = Array.prototype.slice.call (
        document.getElementsByClassName('list_Element')
    );
    elmList.forEach( li => {
        li.classList.remove('active');
    });
        
    //active selected element
    elm.classList.add('active');
}

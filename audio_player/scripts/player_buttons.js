class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://ch1.ice.infomaniak.ch/ch1-64.aac";
        this.audios[1] = "http://coran.ice.infomaniak.ch/coran-64.aac";
        this.audios[3] = "http://ch2.ice.infomaniak.ch/ch2-64.aac";
        this.audios[4] = "http://blida.ice.infomaniak.ch/09.aac";
        this.audios[5] = "http://boumerdes.ice.infomaniak.ch/35.aacc";
        this.audios[6] = "http://jil-fm.ice.infomaniak.ch/jilfm.aac";
        this.audios[7] = "http://ch2.ice.infomaniak.ch/ch2-64.aac";
        this.audios[8] = "http://ch2.ice.infomaniak.ch/ch2-64.aac";
        this.audios[9] = "http://ch2.ice.infomaniak.ch/ch2-64.aac";

        this.names = [];
        this.names[0] = "Radio 1";
        this.names[1] = "Radio 2";
        this.names[2] = "Radio 3";
        this.names[3] = "Radio 4";
        this.names[4] = "Radio 5";
        this.names[5] = "Radio 6";
        this.names[6] = "Radio 7";
        this.names[7] = "Radio 8";
        this.names[8] = "Radio 9";
        this.names[9] = "Radio 10";

        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();
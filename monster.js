
var monster_colors ="ffbc42-d81159-8f2d56-218380-73d2de".split("-").map(a=>"#"+a)

class Monster{
    constructor(args){
        this.r = args.r || 100
        this.p = args.p || createVector(random(width),random(height))
        this.v = args.v || createVector(random(1,-1),random(-1,1))
        this.color = args.color || random(monster_colors)
        this.mode = random(["happy","bad"])
        this.dead = false 
        this.timenum=0

    }
    draw(){
      if(this.dead ==false){
        push()
        translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0, 0, this.r * 1.5, this.r)
        fill("#caf0f8")
        push()
        rotate(PI/13)
        ellipse(70, -35, this.r * 0.4, this.r* 0.9)
        rotate(PI/-6)
        ellipse(70, 35, this.r * 0.4, this.r* 0.9)
        
        pop()
      
      if(this.mode=="happy"){
          fill(255) //白
          ellipse(-50,-12,this.r/4)
          fill(0)
          ellipse(-50,-12,this.r/8)
        }else{
          fill(255) //白
          ellipse(-50,-12,this.r/2)
          fill(0)
          ellipse(-50,-12,this.r/6)
            // fill(255)
            // arc(0,0,this.r/2,this.r/2,0,PI)
            // fill(0)
            // arc(0,0,this.r/3,this.r/3,0,PI)
        }
        stroke(this.color)
        strokeWeight(4)
        noFill()
        //line(this.r/2,0,this.r,0)
        for(var j=0;j<4;j++){
            rotate(PI/6)
            beginShape()
               for(var i =0;i<(this.r/2);i++){
                  vertex(this.r/2+i,sin(i/20+frameCount/20)*10)
                  
            }
            endShape()
    }
    pop()
    }
    else{ //怪物死亡
      this.timenum=this.timenum+1
     push()
     translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0, 0, this.r * 1.5, this.r)
        fill("#caf0f8")
        push()
        rotate(PI/13)
        ellipse(70, -35, this.r * 0.4, this.r* 0.9)
        rotate(PI/-6)
        ellipse(70, 35, this.r * 0.4, this.r* 0.9)
        strokeWeight(5);
        line(width/2-50, height/2-50, width/2+50, height/2+50);
        if (this.dead) {
          strokeWeight(5);
          stroke(255,0,0); // 設置紅色
          let offset = this.r / 5; // 調整叉叉的大小
          let eyeOffset = this.r / 3; // 調整叉叉相對於眼睛的位置
          line(-eyeOffset - offset, -eyeOffset - offset, -eyeOffset + offset, -eyeOffset + offset);
          line(-eyeOffset - offset, -eyeOffset + offset, -eyeOffset + offset, -eyeOffset - offset);
        }
        // if (this.dead) {
        //   strokeWeight(5);
        //   stroke(255, 0, 0); // 設置紅色
        //   let offset = this.r / 6; // 將叉叉移動到右上角
        //   line(-this.r/5 + offset, -this.r/5 - offset, this.r/5 + offset, this.r/5 - offset);
        //   line(-this.r/5 + offset, this.r/5 - offset, this.r/5 + offset, -this.r/5 - offset);
        // }
       
        // line(width/2+50, height/2-50, width/2-50, height/2+50);
      
        // noStroke()
        // ellipse(0,0,this.r)
        // stroke(255)
        // line(-this.r/2,0,this.r/2,0)
        // stroke(this.color)
        // strokeWeight(4)
        // noFill()
        //line(this.r/2,0,this.r,0)
        // for(var j=0;j<8;j++){
        //     rotate(PI/4)
        //     line(this.r/2,0,this.r,0)
    // }
    pop();
  }
  
  if (monsters.length == 0) {
      // 清空畫面，以便顯示遊戲結束畫面
      background("#ffe1a8");
      
      // 顯示遊戲結束文字
  fill("#e26d5c");
  textSize(50);
  textAlign(CENTER, CENTER);
  text("遊戲結束", width/2, height/2);
  textSize(32);
  fill("#e26d5c");
  text("分數：" + score, width/2, 50); // 顯示分數


// 禁用所有的按鍵和滑鼠事件
noLoop();
noCursor();

}
    
  }
  
    update(){
        this.p.add(this.v)
        //碰壁彈回
        if(this.p.x<=0||this.p.x>=width){ //x軸碰到左邊(<=0)，或是碰到右邊(>=width)
            this.v.x=-this.v.x  //把x軸方向，把速度方向改變
          }
          if(this.p.y<=0||this.p.y>=height){ //y軸碰到上邊(<=0)，或是碰到下邊(>=height)
            this.v.y=-this.v.y  //把y軸方向，把速度方向改變
          }
      }
 isBallInRanger(x,y){ 
  let d =dist(x,y,this.p.x,this.p.y) 
  if(d<this.r/2){
    return true 
  }else{
    return false
  }
}
}

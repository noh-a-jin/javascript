const cook = (recipe) => {
    console.log ("요리시작");
    recipe();
     console.log ("요리끝");
} 

const ramen = () => {
    console.log ("물 끓이기");
    console.log ("스프 넣기");
    console.log ("면 넣기");
};

const kimcistew = () => {
    console.log ("고기 볶기");
    console.log ("김치 볶기");
    console.log ("물 넣기");
};

cook(ramen);
cook(kimcistew);
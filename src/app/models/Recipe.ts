
export class Recipe{
    
    constructor(public CodeRecipe:number,
        public NameRecipe:string,
        public CodeCategory:number,
        public Time:number,
        public LevelOfDifficul:number,
        public DateAddRecipe:Date,
        public ListComponent:string[],
        public PrepartionM :[],
        public CodeUser:number,
        public Image:string,
        public IfShow:boolean){}
}
const body = document.querySelector(".movie-disp");
const cardAnimation = {
    isFirst: false,
    movies: [{ id: 1, name: "Five Feet Apart", platform: "Netflix", duration: "1h 57m", ctg: "Romance/Drama", descp: "Stella and Will, both cystic fibrosis patients, develop an unlikely relationship despite the threat of cross-infection. However, they do away with their restrictions to experience togetherness.", bg: 'linear-gradient(to left,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url("https://wallpapercat.com/w/full/d/6/b/2058889-3840x2160-desktop-4k-five-feet-apart-background-image.jpg")', thumbnail: "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url('https://m.media-amazon.com/images/M/MV5BZDE5NTFmODMtZDUyZi00MTdkLTlmMmItMThjZmViMjIzOTcxXkEyXkFqcGc@._V1_.jpg')" },
    { id: 2, name: "All the Bright Places", platform: "Netflix", duration: "1h 48m", ctg: "Romance/Drama", descp: "Two high-school students named Violet and Theodore facing individual struggles form a powerful bond that helps them find solace and change their lives for the better.", bg: 'linear-gradient(to left,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url("https://static01.nyt.com/images/2020/02/26/arts/allthebright1/allthebright1-videoSixteenByNineJumbo1600.jpg")', thumbnail: "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url('https://upload.wikimedia.org/wikipedia/en/8/8c/All_the_Bright_Places.jpeg')" },
    { id: 3, name: "Life of Pi", platform: "Hotstar", duration: "2h 7m", ctg: "Adventure/Fantasy", descp: "Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a tiger in his vessel.", bg: 'linear-gradient(to left,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url("https://www.filmbulletin.ch/media/articles/_1280x608_crop_center-center_none/life_of_pi_01.jpg")', thumbnail: "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url('https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg')" },
    { id: 4, name: "Mahaan", platform: "Amazon Prime", duration: "2h 42m", ctg: "Action/Thriller", descp: "A middle-aged school teacher, Gandhi Mahaan, embarks on a journey of self-discovery after getting abandoned by his family. He soon becomes a pride billionaire but faces many challenges.", bg: 'linear-gradient(to left,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url("https://cdn.wallpapersafari.com/11/15/xH1oj9.jpg")', thumbnail: "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url('https://pics.filmaffinity.com/Mahaan-532795345-large.jpg'" },
    { id: 5, name: "Hridayam", platform: "Hotstar", duration: "2h 51m", ctg: "Romance/Musical", descp: "Arun, a young man, enrols in an engineering college but falls prey to bad habits. As he grows up, he decides to turn over a new leaf and become a responsible adult.", bg: 'linear-gradient(to left,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url("https://www.kerala9.com/wp-content/uploads/2022/01/hridayam-movie-stills-007-1024x785.jpg")', thumbnail: "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hridayam-et00317916-18-11-2021-07-42-12.jpg')" }],
    renderMovies: function () {
        this.movies.forEach((ele) => {
            let movie = this.addCard(ele.id);
            body.appendChild(movie);
            document.getElementById(`cnt${ele.id}`).style.backgroundImage = ele.thumbnail;
        })
    },
    addCard: function (id) {
        let container = document.createElement("div");
        container.className = 'container';
        container.id = `cnt${id}`;
        return container;

    },
    bg_disp: function () {
        let firstele = body.firstElementChild;
        let name = firstele.id;
        console.log(name);
        console.log(this.isFirst);
        if (this.isFirst) {
            console.log("First call, only appending element");
            this.isFirst = false; 
        } else {
            this.addClass(name);
            console.log("In bg disp, executing animation");
        }
    },

    addClass: function (id) {
        console.log(`Adding class to: ${id}`);
        const element = document.getElementById(id);
        element.classList.add("movement");
        gsap.fromTo(`#${id}`, { autoAlpha: 1 },
            {
                autoAlpha: 0, 
                duration:4, 
                ease: "power2.out",
                onComplete: () => {
                    gsap.set(`#${id}`, { autoAlpha: 1 }); 
                    this.moveToBack(id); 
                }
            }
        );
    },
    moveToBack: function (id) {
        let element = document.getElementById(id);
        body.appendChild(element);
        let num = parseInt(id.slice(3));
        this.body_disp(num);
        this.bg_disp(); 
    },
    body_disp:function(id){
        this.clear_disp();
        const info = cardAnimation.movies.find(movie => movie.id === id);
        console.log(info);
        document.querySelector("body").style.backgroundImage = `${info.bg}`;
        let info_box = document.createElement('div');
        info_box.className = "info-box";
        let info_title = document.createElement('div');
        info_title.className = "info-title"
        let info_title_cnt = document.createElement('p');
        info_title_cnt.textContent = "";
        info_title_cnt.textContent = `${info.name}`;
        info_title.appendChild(info_title_cnt);
        let info_other = document.createElement('div');
        info_other.className = "info-other";
        let other_1 = document.createElement('p');
        other_1.textContent = "";
        other_1.textContent = `${info.duration}`;
        let other_2 = document.createElement('p');
        other_2.textContent = "";
        other_2.textContent = `${info.ctg}`;
        let other_3 = document.createElement('p');
        other_3.textContent = "";
        other_3.textContent = `${info.platform}`;
        info_other.appendChild(other_1);
        info_other.appendChild(other_2);
        info_other.appendChild(other_3);
        let info_desc = document.createElement('div');
        info_desc.className = "info-desc";
        let desc_mov = document.createElement('p');
        desc_mov.textContent = "";
        desc_mov.textContent = `${info.descp}`;
        info_desc.appendChild(desc_mov);

        info_box.appendChild(info_title);
        info_box.appendChild(info_other);
        info_box.appendChild(info_desc);

        document.querySelector("body").appendChild(info_box);

        gsap.fromTo(
        info_box,
        {
            y: 100, 
            opacity: 0, 
        },
        {
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power2.out", 
        }
    );

    },
    clear_disp:function(){
        document.querySelector("body").removeChild(document.querySelector(".info-box"));
    }
}
cardAnimation.renderMovies();
cardAnimation.bg_disp();
cardAnimation.body_disp(5);

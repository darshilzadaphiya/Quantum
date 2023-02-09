import data from "../data/subjects.json" assert { type: 'json' };


for(const student of data){

    const img_src = student.thumbnailURL;
    const title = student.title;
    const subject = student.subject;
    const grade = student.grade;
    const units = student.sub_details.units;
    const lessons = student.sub_details.lessons;
    const topics = student.sub_details.topics;

    //Creating each card
    const card = document.createElement('div');
    card.innerHTML = `<div class="card-divs">
    <div class="card-img">
      <img src="${img_src}" alt="" />
    </div>
    <div class="previews">
      <img src="../icons/preview.svg" alt="" class="pre-img" />
      <img src="../icons/manage course.svg" alt="" class="pre-img" />
      <img src="../icons/grade submissions.svg" alt="" class="pre-img" />
      <img src="../icons/reports.svg" alt="" class="pre-img" />
    </div>
    <div class="line1 line"><p>${title}</p></div>
    <div class="line2 line">
      <p>${subject}</p>
      <p class="slash">|</p>
      <p>Grade ${grade}</p>
      <p class="line2-num">+2</p>
    </div>
    <div class="line3 line">
      <p class="bold">${units}</p>
      <p class="line3-desc">Units</p>
      <p class="bold">${lessons}</p>
      <p class="line3-desc">Lessons</p>
      <p class="bold">${topics}</p>
      <p class="line3-desc">Topics</p>
    </div>
    <div class="line4 line">
      <form action="" class="bold">
        <select class="teacher select">
          <option value="Course">Mr. Frank's Class B</option>
        </select>
      </form>
    </div>
    <div class="line5 line">
      <p>50 students</p>
      <p class="slash">|</p>
      <p>21-Jan-2020 - 21-Aug-2020</p>
    </div>
    <div class="star">
      <img src="./icons/favourite.svg" alt="" />
    </div>
  </div>`;

    document.getElementsByClassName('course-card')[0].appendChild(card);
}

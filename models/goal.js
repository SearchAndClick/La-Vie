class Meal {
  constructor(
    title,
    progress,
    deadline,
    visibility,
    category,
    todaysTarget,
    goalSteps,
    notes,
    color,
    isFavorite
  ) {
    this.title = title;
    this.progress = progress;
    this.deadline = deadline;
    this.visibility = visibility;
    this.category = category;
    this.todaysTarget = todaysTarget;
    this.goalSteps = goalSteps;
    this.notes = notes;
    this.color = color;
    this.isFavorite = isFavorite;
  }
}

export default Meal;

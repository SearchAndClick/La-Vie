class Goal {
  constructor(
    id,
    title,
    description,
    progress,
    deadline,
    category,
    todaysTarget,
    goalSteps,
    notes,
    color,
    isPublic,
    isFavorite
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.progress = progress;
    this.deadline = deadline;
    this.category = category;
    this.todaysTarget = todaysTarget;
    this.goalSteps = goalSteps;
    this.notes = notes;
    this.color = color;
    this.isPublic = isPublic;
    this.isFavorite = isFavorite;
  }
}

export default Goal;

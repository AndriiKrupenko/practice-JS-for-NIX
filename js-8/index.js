function finalGrade(grade, project) {
    if (grade > 90 && grade <= 100 || project > 10) {
        return 100;
    } else if (grade > 75 && grade <= 90 || project >= 5 && project <= 10) {
        return 90;
    } else if (grade > 50 && grade <= 75 || project >= 2 && project < 5) {
        return 75;
    } else {
        return 0;
    }
}
package model

type GradeDistribution struct {
	Code             string   `json:"code"`
	Year             string   `json:"year"`
	Period           string   `json:"period"`
	DegreeProgram    string   `json:"degreeProgram"`
	Major            string   `json:"major"`
	CourseName       string   `json:"courseName"`
	Instructors      []string `json:"instructors"`
	RegisterStudnets string   `json:"registerStudents"`
	Grade            struct {
		Distribution distribution `json:"distribution"`
		Average      string       `json:"average"`
	} `json:"grade"`
}

type distribution struct {
	Grade1 string `json:"A+"`
	Grade2 string `json:"A"`
	Grade3 string `json:"B+"`
	Grade4 string `json:"B"`
	Grade5 string `json:"C+"`
	Grade6 string `json:"C"`
	Grade7 string `json:"D"`
	Grade8 string `json:"F"`
	Grade9 string `json:"others"`
}

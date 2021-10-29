package main

import (
	"fmt"
	"io/ioutil"

	"net/http"

	"github.com/labstack/echo"
)

func getGradeDists(c echo.Context) error {
	courseId := c.Param("courseId")
	fmt.Println(courseId)
	if courseId == "" {
		return c.String(http.StatusNotFound, "No Grade Distribution")
	}

	bytes, err := ioutil.ReadFile("./data/grade-distribution/grade_undergrad.json")
	if err != nil {
		return c.String(http.StatusNotFound, "No Grade Distribution") // TODO:
	}

	return c.String(http.StatusOK, string(bytes))
}

func getSyllabusResults(c echo.Context) error {
	fmt.Println(c.FormValue("period"), c.FormValue("year"), c.FormValue("dayOfWeek"), c.FormValue("periodOfTime"), c.FormValue("degree"), c.FormValue("typeOfCourse"))
	bytes, err := ioutil.ReadFile("./data/syllabus/syllabus_search_result.json")
	if err != nil {
		return c.String(http.StatusNotFound, "No Grade Distribution") // TODO:
	}

	return c.String(http.StatusOK, string(bytes))
}

func main() {
	e := echo.New()
	e.GET("/grade-distribution/:courseId", getGradeDists)
	e.GET("/search/syllabus", getSyllabusResults)
	e.Logger.Fatal(e.Start(":10000"))
}

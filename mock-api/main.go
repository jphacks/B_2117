package main

import (
	"fmt"
	"io/ioutil"

	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
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

func getRecommend(c echo.Context) error {
	courseId := c.Param("courseId")

	bytes, err := ioutil.ReadFile("./data/recommend/recommend_" + courseId + ".json")
	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusNotFound, "No recommend")
	}

	return c.String(http.StatusOK, string(bytes))
}

func getSyllabusResults(c echo.Context) error {
	fmt.Println(c.QueryParam("period"), c.QueryParam("year"), c.QueryParam("dayOfWeek"), c.FormValue("periodOfTime"), c.FormValue("degreeProgram"), c.FormValue("typeOfLesson"), c.FormValue(("keyword")))
	bytes, err := ioutil.ReadFile("./data/syllabus/syllabus_search_result.json")
	if err != nil {
		return c.String(http.StatusNotFound, "No Grade Distribution") // TODO:
	}

	return c.String(http.StatusOK, string(bytes))
}

func getCourseDetail(c echo.Context) error {
	courseId := c.Param("courseId")
	bytes, err := ioutil.ReadFile("./data/syllabus/syllabus_detail_" + courseId + ".json")
	if err != nil {
		return c.String(http.StatusNotFound, "No Details Here")
	}

	return c.String(http.StatusOK, string(bytes))
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.GET("/grade-distribution/:courseId", getGradeDists)
	e.GET("/search/syllabus", getSyllabusResults)
	e.GET("/search/syllabus/:year/detail/:courseId", getCourseDetail)
	e.GET("/recommend/:courseId", getRecommend)
	e.Logger.Fatal(e.Start(":10000"))
}

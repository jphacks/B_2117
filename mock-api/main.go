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

func main() {
	e := echo.New()
	e.GET("/grade-distribution/:courseId", getGradeDists)
	e.Logger.Fatal(e.Start(":10000"))
}

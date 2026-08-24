package core

type GithubError struct {
	IsGithubError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGithubError(code string, msg string, ctx *Context) *GithubError {
	return &GithubError{
		IsGithubError: true,
		Sdk:              "Github",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GithubError) Error() string {
	return e.Msg
}

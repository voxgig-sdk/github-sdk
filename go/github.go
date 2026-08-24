package voxgiggithubsdk

import (
	"github.com/voxgig-sdk/github-sdk/go/core"
	"github.com/voxgig-sdk/github-sdk/go/entity"
	"github.com/voxgig-sdk/github-sdk/go/feature"
	_ "github.com/voxgig-sdk/github-sdk/go/utility"
)

// Type aliases preserve external API.
type GithubSDK = core.GithubSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GithubEntity = core.GithubEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GithubError = core.GithubError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewRepoEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGithubSDK = core.NewGithubSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGithubSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GithubSDK  { return NewGithubSDK(nil) }
func Test() *GithubSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

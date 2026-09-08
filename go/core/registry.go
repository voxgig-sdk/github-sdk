package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPullEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepoEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity


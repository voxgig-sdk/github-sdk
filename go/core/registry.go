package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewRepoEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity


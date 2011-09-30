// Copyright 2011 Google Inc. All Rights Reserved.
// Author: jacobsa@google.com (Aaron Jacobs)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

////////////////////////
// returnWith
////////////////////////

function ReturnWithTest() {}
registerTestSuite(ReturnWithTest);

ReturnWithTest.prototype.ReturnsArg = function() {
  expectEq('taco', returnWith('taco')());
  expectEq(2, returnWith(2)());
  expectEq(null, returnWith(null)());
};

////////////////////////
// doAll
////////////////////////

function DoAllTest() {}
registerTestSuite(DoAllTest);

DoAllTest.prototype.NoActions = function() {
};

DoAllTest.prototype.CallsActionsWithCorrectArgs = function() {
};

DoAllTest.prototype.ReturnsLastReturnValue = function() {
};
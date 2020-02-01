"use strict";

const str = "'<style> <styler> <style test=\"...\">'";
const regex = /<style(>|\s.*?>)/g;
alert(str.match(regex));

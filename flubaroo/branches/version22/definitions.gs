// File: definitions.gas
// Description: 
// This file contains all constants and global variable definitions.

// TODO_AJR - These could all go in a global Flubaroo object (although
// probably only an issue is we start using libraries?? At least the
// constants could be enumed.

// TODO_AJR - A lot of these are constants and as such, and to be consistent
// should be in capitals.

// TODO_AJR - Use enums.

DEBUG_ON = false;
LOGGING_ON = false;

LOG_SHEET_NAME = "log";
FIELD_LOG_SHEET_NAME = "fieldlog";
FIELD_RESET_SHEET_NAME = "fieldreset";
FIELD_LOG_DEFAULT_RATE = 25;

// Current version. Shown in "About Flubaroo" dialogue.
gbl_version_str = "Version 22";
                  
// NOTE: Update version in README.gas                  

// Version update notice. Set this to true when a new version is made
// available (gbl_version_str is updated). A message will then be popped up during
// first install of the updated script (see FLB_STR_NEW_VERSION_NOTICE)
gbl_show_version_update_notice = false;

// gbl_invalidate_grades_on_update:
// Set to true only when a new version has changed the format of the Grades sheet,
// and so it cannot be read upon re-grade to check on things like Already Emailed status.
gbl_invalidate_grades_on_update = false;

// Global variables for naming things
gbl_menu_name = 'Flubaroo';

// Names of the sheets for submissions and grades in English language versions
// of Flubaroo. As of version 3.0, we now support other languages. But these
// names will always work to support backwards compatability.
gbl_subm_sheet_name = 'Student Submissions';
gbl_grades_sheet_name = 'Grades';

// Global variables that relate to row and column numbers or lengths.
gbl_grades_start_row_num = 7;
gbl_num_metrics_cols = 6; // score, percent, 
                          // number of submissions, 
                          // already emailed, student feedback,
                          // subm copy row index

PALE_YELLOW = "#ffffcc";
PALE_RED = "#e05252";

// ID's of the metrics columns, starting from 0. These are written out in 
// 'Grades' after the student identifiers.
METRIC_TOTAL_POINTS = 0;
METRIC_PERCENT = 1;
METRIC_TIMES_SUBMITTED = 2;
METRIC_EMAILED_GRADE = 3;
METRIC_STUDENT_FEEDBACK = 4; // not really a "metric", but hijack this logic.
METRIC_SUBM_COPY_ROW_INDEX = 5; // hidden column. points to row in Grades sheet

gbl_num_summary_rows = 4;  // number of rows at the top of 'Grades' that contain summary data.

// Constants for hidden rows, including order of hidden rows
HIDDEN_ROW_GRADING_OPTIONS = 1;
HIDDEN_ROW_GOODIES = 2;
HIDDEN_ROW_ORIG_ORDER = 3;

// TODO_AJR - Don't think these are used anymore, delete
// Indicies into the array returned by getHiddenGoodies:
HIDDEN_GOODIES_ANSWER_KEY_ROW = 0;
HIDDEN_GOODIES_NUMBER_SUBMISSIONS = 1;
HIDDEN_GOODIES_CHART_URL = 2;

FLUBAROO_WELCOME_IMG_URL =
  'http://flubaroo.appspot.com/flubaroo_128x128_no_padding.png';
FLUBAROO_WORKING_IMG_URL =
  'http://flubaroo.appspot.com/flubaroo_working.gif';

// Grading option identifiers
GRADING_OPT_STUD_ID = "Identifies Student";
GRADING_OPT_SKIP = "Skip Grading";
GRADING_OPT_1_PT = "1 Point";
GRADING_OPT_2_PT = "2 Points";
GRADING_OPT_3_PT = "3 Points";
GRADING_OPT_4_PT = "4 Points";
GRADING_OPT_5_PT = "5 Points";

// Used to initialize GradesWorksheet
// TODO_AJR- Add else/default on type testing to catch illegal type throughout code.
INIT_TYPE_SUBM = 0;           // initialies from the Student Submissions worksheet.
INIT_TYPE_GRADED_FULL = 1;    // initializes from the Grades worksheet. Reads in everything.
INIT_TYPE_GRADED_META = 2;    // same as INIT_TYPE_GRADED_FULL, but only reads in meta info (headers, grading_opt), and 
                              // doesn't read-in all of the actual graded submissions, or original submisions.
INIT_TYPE_GRADED_PARTIAL = 3; // same as INIT_TYPE_GRADED_FULL, but only skips reading in all of the original submissions
                              // in the hidden rows. Used when reading in an existing Grades sheet when re-grading.

// Used for function createRowForGradesSheet (member of GradedSubmission)
GRADES_OUTPUT_ROW_TYPE_GRADED_VALS = 0;
GRADES_OUTPUT_ROW_TYPE_QUESTIONS_HEADER = 1;
GRADES_OUTPUT_ROW_TYPE_QUESTIONS_FULL = 2;
GRADES_OUTPUT_ROW_TYPE_ANSWER_KEY = 3;
GRADES_OUTPUT_ROW_TYPE_GRADING_OPT = 4;
GRADES_OUTPUT_ROW_TYPE_SUBMISSION_VALS = 5;
GRADES_OUTPUT_ROW_TYPE_HELP_TIPS = 6;

gbl_num_hidden_rows = 4;       // number of hidden rows at the bottom of the Grades sheet,
                                // not including the copies of the original submissions.
// gbl_num_space_before_hidden = (Debug.debugOn) ? 5 : 10;  // number of rows to add before hidden rows 
gbl_num_space_before_hidden = 5;

// Indices into hidden rows in grades sheet
GRADES_HIDDEN_ROW_TYPE_GRADING_OPT = 0;
GRADES_HIDDEN_ROW_TYPE_HELP_TIPS = 1;
GRADES_HIDDEN_ROW_TYPE_ANSWER_KEY = 2;
GRADES_HIDDEN_ROW_TYPE_QUESTIONS_FULL = 3;
GRADES_HIDDEN_ROW_TYPE_SUBMISSION_VALS = 4; // must be last!

// Status codes for function return values
STATUS_OK = 0
STATUS_NOT_FOUND = 1
STATUS_NO_EFFECT = 2

// Script and user properties
DOC_PROP_HISTOGRAM_URL = "flubaroo_histogram_url";
DOC_PROP_NUM_GRADED_SUBM = "flubaroo_num_graded_subm";
DOC_PROP_UI_GRADING_OPT = "flubaroo_ui_grading_opt";
DOC_PROP_ANSWER_KEY_ROW_NUM = "flubaroo_anskey_row_num";
DOC_PROP_STUDENT_FEEDBACK_HIDDEN = "flubaroo_student_feedback_hidden";
DOC_PROP_HELP_TIPS_HIDDEN = "flubaroo_help_tips_hidden";
DOC_PROP_NUM_STUDENT_IDENTIFIERS = "flubaroo_num_student_identifiers";
DOC_PROP_SHEET_INSTALLED_VERSION = "flubaroo_sheet_installed_version";
DOC_PROP_EMPTY_SUBM_ROW_PTR = "flubaroo_submission_empty_subm_row_ptr";
DOC_PROP_SKIP_EMAIL = "flubaroo_skip_email";
DOC_PROP_LAST_GRADED_ROW_COUNT = "flubaroo_auto_grade_last_row_count";

DOC_PROP_EMAIL_ADDRESS_QUESTION = "flubaroo_email_address_question";
DOC_PROP_EMAIL_INCLUDE_QUESTIONS_SCORES = "flubaroo_email_include_quesions_scores";
DOC_PROP_EMAIL_INCLUDE_ANSWER_KEY = "flubaroo_email_include_answer_key";
DOC_PROP_EMAIL_INSTRUCTOR_MESSAGE = "flubaroo_email_instructor_message";
DOC_PROP_EMAIL_INSTRUCTOR_ADDRESS = "flubaroo_email_instructor_address";

DOC_PROP_AUTOGRADE_SUBMIT_TRIGGER_ID = "flubaroo_auto_grade_submit_trigger_id";
DOC_PROP_AUTOGRADE_ENABLED = "flubaroo_auto_grade_enabled";
DOC_PROP_AUTOGRADE_GATHERING_OPTIONS = "flubaroo_auto_grade_gathering_options";
DOC_PROP_AUTOGRADE_RUNNING = "flubaroo_auto_grade_running";


DOC_PROP_UI_OFF = "flubaroo_ui_off"; // Default - if not set - is on.
DOC_PROP_UI_WAS_OFF = "flubaroo_ui_was_off"; // The UI state before the last autograde transition.

/* Properties to store Advanced Options.
   For the true/false properties, they exist if true, and don't exist if false.
 */
DOC_PROP_ADV_OPTION_EMAIL_EDIT_LINK = "flubaroo_adv_option_email_edit_link";
DOC_PROP_ADV_OPTION_PASS_RATE = "flubaroo_adv_option_pass_rate";
USER_PROP_ADV_OPTION_NO_NOREPLY = "flubaroo_adv_option_no_noreply";
USER_PROP_ADV_OPTION_USE_DOCS_FOR_GRADES = "flubaroo_adv_option_use_docs";

DOC_PROP_FORM_SUBMIT_TRIGGER_ID = "flubaroo_form_submit_trigger_id";

USER_PROP_GRADE_MONTH = "flubaroo_grade_month";  // month that count corresponds to
USER_PROP_GRADE_MONTH_COUNT = "flubaroo_grade_month_count"; // # of times grading has occured (on any assignment) during this month
USER_PROP_GRADE_LIFETIME_COUNT = "flubaroo_grade_lifetime_count";

USER_PROP_LANGUAGE_ID = "flubaroo_language_id"; // only set if "Set Language" menu used.

USER_PROP_LATEST_VERSION_INSTALLED = "flubaroo_latest_version_installed";

USER_PROP_AUTOGRADE_ACTIVE_USES = "flubaroo_auto_grade_active_uses";

// special answer key operators
ANSKEY_OPERATOR_OR = " %or ";
ANSKEY_OPERATOR_NUMERIC_RANGE = " %to ";
ANSKEY_OPERATOR_CASE_SENSITIVE = "%cs";

// TODO_AJR - Make this optional.
// The certificate template. 
// Set to "" to disable feature.
DOC_TEMPLATE = "";
DOC_NAME = ""
  
// Default pass rates
LOWSCORE_QUESION_PERCENTAGE = 60.0;
LOWSCORE_STUDENT_PERCENTAGE = 70.0;
CERTIFICATE_PASS_PERCENTAGE = 50.0;

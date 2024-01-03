window.BENCHMARK_DATA = {
  "lastUpdate": 1704314627279,
  "repoUrl": "https://github.com/jvllmr/sqlalchemy-sessionload",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}
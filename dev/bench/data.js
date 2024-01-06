window.BENCHMARK_DATA = {
  "lastUpdate": 1704503237426,
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
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
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
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
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
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
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
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
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
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
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
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
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
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
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
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
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
          "id": "dd236e135f86c493978478d1063257f7b0aecef7",
          "message": "remove unnecessary comment",
          "timestamp": "2024-01-05T20:13:42+01:00",
          "tree_id": "206fe3f847daa67f5b31d000c50fc4d9b5da2768",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dd236e135f86c493978478d1063257f7b0aecef7"
        },
        "date": 1704482073151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.0457412588874,
            "unit": "iter/sec",
            "range": "stddev: 0.001366163269766585",
            "extra": "mean: 3.332825174602873 msec\nrounds: 189"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1721.0073702224183,
            "unit": "iter/sec",
            "range": "stddev: 0.00040738323065369903",
            "extra": "mean: 581.0550363132744 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.212105314359454,
            "unit": "iter/sec",
            "range": "stddev: 0.007714558528079247",
            "extra": "mean: 237.41096799999468 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.403563372584578,
            "unit": "iter/sec",
            "range": "stddev: 0.007754023868752204",
            "extra": "mean: 74.60702592307527 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.56027934658854,
            "unit": "iter/sec",
            "range": "stddev: 0.0015858485832686568",
            "extra": "mean: 5.761686969880161 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.32608948430751,
            "unit": "iter/sec",
            "range": "stddev: 0.006864296180547274",
            "extra": "mean: 75.04076879999768 msec\nrounds: 15"
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
          "id": "dd236e135f86c493978478d1063257f7b0aecef7",
          "message": "remove unnecessary comment",
          "timestamp": "2024-01-05T20:13:42+01:00",
          "tree_id": "206fe3f847daa67f5b31d000c50fc4d9b5da2768",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dd236e135f86c493978478d1063257f7b0aecef7"
        },
        "date": 1704482073151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.0457412588874,
            "unit": "iter/sec",
            "range": "stddev: 0.001366163269766585",
            "extra": "mean: 3.332825174602873 msec\nrounds: 189"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1721.0073702224183,
            "unit": "iter/sec",
            "range": "stddev: 0.00040738323065369903",
            "extra": "mean: 581.0550363132744 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.212105314359454,
            "unit": "iter/sec",
            "range": "stddev: 0.007714558528079247",
            "extra": "mean: 237.41096799999468 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.403563372584578,
            "unit": "iter/sec",
            "range": "stddev: 0.007754023868752204",
            "extra": "mean: 74.60702592307527 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.56027934658854,
            "unit": "iter/sec",
            "range": "stddev: 0.0015858485832686568",
            "extra": "mean: 5.761686969880161 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.32608948430751,
            "unit": "iter/sec",
            "range": "stddev: 0.006864296180547274",
            "extra": "mean: 75.04076879999768 msec\nrounds: 15"
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
          "id": "51b5653ab3ab96cdf23d2d08881adadd923ac10e",
          "message": "rename contributing file",
          "timestamp": "2024-01-05T20:15:42+01:00",
          "tree_id": "9eac849faa2b41fb216674c6644d06b2a8b3f827",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/51b5653ab3ab96cdf23d2d08881adadd923ac10e"
        },
        "date": 1704482190344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.7482826310884,
            "unit": "iter/sec",
            "range": "stddev: 0.001461217296043718",
            "extra": "mean: 3.2494088722462333 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1905.0696973726874,
            "unit": "iter/sec",
            "range": "stddev: 0.000012156048098020338",
            "extra": "mean: 524.9151783680755 usec\nrounds: 1054"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.424204714627436,
            "unit": "iter/sec",
            "range": "stddev: 0.01556271033304201",
            "extra": "mean: 226.02932379999743 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.152982126939442,
            "unit": "iter/sec",
            "range": "stddev: 0.012683561501519886",
            "extra": "mean: 65.99361047368814 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.09120164086391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605107256299658",
            "extra": "mean: 5.491753533332636 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.183008186740228,
            "unit": "iter/sec",
            "range": "stddev: 0.012772315930092584",
            "extra": "mean: 65.86310088888246 msec\nrounds: 18"
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
          "id": "51b5653ab3ab96cdf23d2d08881adadd923ac10e",
          "message": "rename contributing file",
          "timestamp": "2024-01-05T20:15:42+01:00",
          "tree_id": "9eac849faa2b41fb216674c6644d06b2a8b3f827",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/51b5653ab3ab96cdf23d2d08881adadd923ac10e"
        },
        "date": 1704482190344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.7482826310884,
            "unit": "iter/sec",
            "range": "stddev: 0.001461217296043718",
            "extra": "mean: 3.2494088722462333 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1905.0696973726874,
            "unit": "iter/sec",
            "range": "stddev: 0.000012156048098020338",
            "extra": "mean: 524.9151783680755 usec\nrounds: 1054"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.424204714627436,
            "unit": "iter/sec",
            "range": "stddev: 0.01556271033304201",
            "extra": "mean: 226.02932379999743 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.152982126939442,
            "unit": "iter/sec",
            "range": "stddev: 0.012683561501519886",
            "extra": "mean: 65.99361047368814 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.09120164086391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605107256299658",
            "extra": "mean: 5.491753533332636 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.183008186740228,
            "unit": "iter/sec",
            "range": "stddev: 0.012772315930092584",
            "extra": "mean: 65.86310088888246 msec\nrounds: 18"
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
          "id": "dbda8390407971d721fce8ba227c727352d52170",
          "message": "add publish workflow",
          "timestamp": "2024-01-05T20:26:02+01:00",
          "tree_id": "d411ad3dab05741ca1c347dd3417635d669ad590",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dbda8390407971d721fce8ba227c727352d52170"
        },
        "date": 1704482824295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.1363959868585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011917231258803623",
            "extra": "mean: 3.234818070540327 msec\nrounds: 241"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1782.583755908947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789754580552347",
            "extra": "mean: 560.9834582443481 usec\nrounds: 1401"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.672423287360173,
            "unit": "iter/sec",
            "range": "stddev: 0.01499471151224194",
            "extra": "mean: 214.02170533333256 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.143506054739891,
            "unit": "iter/sec",
            "range": "stddev: 0.008778495716186264",
            "extra": "mean: 66.03490607691882 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.87609358595725,
            "unit": "iter/sec",
            "range": "stddev: 0.0021362323758864574",
            "extra": "mean: 5.685821077844571 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.949517129497465,
            "unit": "iter/sec",
            "range": "stddev: 0.008744529103478976",
            "extra": "mean: 66.89179264705892 msec\nrounds: 17"
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
          "id": "dbda8390407971d721fce8ba227c727352d52170",
          "message": "add publish workflow",
          "timestamp": "2024-01-05T20:26:02+01:00",
          "tree_id": "d411ad3dab05741ca1c347dd3417635d669ad590",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dbda8390407971d721fce8ba227c727352d52170"
        },
        "date": 1704482824295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.1363959868585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011917231258803623",
            "extra": "mean: 3.234818070540327 msec\nrounds: 241"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1782.583755908947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789754580552347",
            "extra": "mean: 560.9834582443481 usec\nrounds: 1401"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.672423287360173,
            "unit": "iter/sec",
            "range": "stddev: 0.01499471151224194",
            "extra": "mean: 214.02170533333256 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.143506054739891,
            "unit": "iter/sec",
            "range": "stddev: 0.008778495716186264",
            "extra": "mean: 66.03490607691882 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.87609358595725,
            "unit": "iter/sec",
            "range": "stddev: 0.0021362323758864574",
            "extra": "mean: 5.685821077844571 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.949517129497465,
            "unit": "iter/sec",
            "range": "stddev: 0.008744529103478976",
            "extra": "mean: 66.89179264705892 msec\nrounds: 17"
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
          "id": "11a2bb9ce42f84c7a598093d40c11a4eb1df62b7",
          "message": "use trusted publishing",
          "timestamp": "2024-01-05T20:51:13+01:00",
          "tree_id": "8ea79406da4333b208a83422e2a861d447f45826",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/11a2bb9ce42f84c7a598093d40c11a4eb1df62b7"
        },
        "date": 1704484331236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.08614574328936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010508939897772057",
            "extra": "mean: 3.400364194214404 msec\nrounds: 242"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1644.8665049163449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009108614915267834",
            "extra": "mean: 607.9520721049993 usec\nrounds: 1373"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.035700937258774,
            "unit": "iter/sec",
            "range": "stddev: 0.010204424404821435",
            "extra": "mean: 247.788430199995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.295281052612157,
            "unit": "iter/sec",
            "range": "stddev: 0.007322878877351519",
            "extra": "mean: 75.2146566923102 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.39454475277114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013001231824715366",
            "extra": "mean: 5.868732484663286 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.073553715405343,
            "unit": "iter/sec",
            "range": "stddev: 0.007962055842607015",
            "extra": "mean: 76.49029649999761 msec\nrounds: 12"
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
          "id": "11a2bb9ce42f84c7a598093d40c11a4eb1df62b7",
          "message": "use trusted publishing",
          "timestamp": "2024-01-05T20:51:13+01:00",
          "tree_id": "8ea79406da4333b208a83422e2a861d447f45826",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/11a2bb9ce42f84c7a598093d40c11a4eb1df62b7"
        },
        "date": 1704484331236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.08614574328936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010508939897772057",
            "extra": "mean: 3.400364194214404 msec\nrounds: 242"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1644.8665049163449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009108614915267834",
            "extra": "mean: 607.9520721049993 usec\nrounds: 1373"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.035700937258774,
            "unit": "iter/sec",
            "range": "stddev: 0.010204424404821435",
            "extra": "mean: 247.788430199995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.295281052612157,
            "unit": "iter/sec",
            "range": "stddev: 0.007322878877351519",
            "extra": "mean: 75.2146566923102 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.39454475277114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013001231824715366",
            "extra": "mean: 5.868732484663286 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.073553715405343,
            "unit": "iter/sec",
            "range": "stddev: 0.007962055842607015",
            "extra": "mean: 76.49029649999761 msec\nrounds: 12"
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
          "id": "f7feef0fd1b1589661130acfe820e566781f8a65",
          "message": "format python code in readme",
          "timestamp": "2024-01-05T20:55:34+01:00",
          "tree_id": "92b2c46306bb29e4295bcf1ec14722fcd483ad94",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7feef0fd1b1589661130acfe820e566781f8a65"
        },
        "date": 1704484583634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.1617526220828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013272307541836845",
            "extra": "mean: 3.365170622316782 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1716.8893881933664,
            "unit": "iter/sec",
            "range": "stddev: 0.000024455997106453227",
            "extra": "mean: 582.4487045448346 usec\nrounds: 44"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.928781262814316,
            "unit": "iter/sec",
            "range": "stddev: 0.016167910630091778",
            "extra": "mean: 254.531859399998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.912047804807477,
            "unit": "iter/sec",
            "range": "stddev: 0.014475438471769375",
            "extra": "mean: 83.94862213333454 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.20036280600965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929462639011794",
            "extra": "mean: 5.841109116883817 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.77565681936688,
            "unit": "iter/sec",
            "range": "stddev: 0.012373702086557694",
            "extra": "mean: 78.27386209091648 msec\nrounds: 11"
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
          "id": "f7feef0fd1b1589661130acfe820e566781f8a65",
          "message": "format python code in readme",
          "timestamp": "2024-01-05T20:55:34+01:00",
          "tree_id": "92b2c46306bb29e4295bcf1ec14722fcd483ad94",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7feef0fd1b1589661130acfe820e566781f8a65"
        },
        "date": 1704484583634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.1617526220828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013272307541836845",
            "extra": "mean: 3.365170622316782 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1716.8893881933664,
            "unit": "iter/sec",
            "range": "stddev: 0.000024455997106453227",
            "extra": "mean: 582.4487045448346 usec\nrounds: 44"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.928781262814316,
            "unit": "iter/sec",
            "range": "stddev: 0.016167910630091778",
            "extra": "mean: 254.531859399998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.912047804807477,
            "unit": "iter/sec",
            "range": "stddev: 0.014475438471769375",
            "extra": "mean: 83.94862213333454 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.20036280600965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929462639011794",
            "extra": "mean: 5.841109116883817 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.77565681936688,
            "unit": "iter/sec",
            "range": "stddev: 0.012373702086557694",
            "extra": "mean: 78.27386209091648 msec\nrounds: 11"
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
          "id": "93717959bf704f3255783a1822140cbcb8987e9b",
          "message": "don't format pdm.lock",
          "timestamp": "2024-01-05T22:39:03+01:00",
          "tree_id": "66aaed48093bbf2be3cbde54f0491551d88ef32d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/93717959bf704f3255783a1822140cbcb8987e9b"
        },
        "date": 1704490795493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.94147553980343,
            "unit": "iter/sec",
            "range": "stddev: 0.0010113844150392317",
            "extra": "mean: 3.2579500643937003 msec\nrounds: 264"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1789.564744245642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014189676875783944",
            "extra": "mean: 558.7950942906688 usec\nrounds: 1156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.316760039107292,
            "unit": "iter/sec",
            "range": "stddev: 0.007852500424113956",
            "extra": "mean: 231.6552207999962 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.800214958942185,
            "unit": "iter/sec",
            "range": "stddev: 0.009061603966745175",
            "extra": "mean: 72.46263938461522 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.38677575978028,
            "unit": "iter/sec",
            "range": "stddev: 0.0018300839422059343",
            "extra": "mean: 5.800909005882753 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017205034463869,
            "unit": "iter/sec",
            "range": "stddev: 0.007503002634891164",
            "extra": "mean: 71.34089838461495 msec\nrounds: 13"
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
          "id": "93717959bf704f3255783a1822140cbcb8987e9b",
          "message": "don't format pdm.lock",
          "timestamp": "2024-01-05T22:39:03+01:00",
          "tree_id": "66aaed48093bbf2be3cbde54f0491551d88ef32d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/93717959bf704f3255783a1822140cbcb8987e9b"
        },
        "date": 1704490795493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.94147553980343,
            "unit": "iter/sec",
            "range": "stddev: 0.0010113844150392317",
            "extra": "mean: 3.2579500643937003 msec\nrounds: 264"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1789.564744245642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014189676875783944",
            "extra": "mean: 558.7950942906688 usec\nrounds: 1156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.316760039107292,
            "unit": "iter/sec",
            "range": "stddev: 0.007852500424113956",
            "extra": "mean: 231.6552207999962 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.800214958942185,
            "unit": "iter/sec",
            "range": "stddev: 0.009061603966745175",
            "extra": "mean: 72.46263938461522 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.38677575978028,
            "unit": "iter/sec",
            "range": "stddev: 0.0018300839422059343",
            "extra": "mean: 5.800909005882753 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017205034463869,
            "unit": "iter/sec",
            "range": "stddev: 0.007503002634891164",
            "extra": "mean: 71.34089838461495 msec\nrounds: 13"
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
          "id": "ddc9c5ffb361c9fed23b50adadbbcb2b9350f503",
          "message": "fix: between operator works with SQLAlchemy 2.0",
          "timestamp": "2024-01-06T02:03:56+01:00",
          "tree_id": "02c1fbed3d9ef7ea216137bce8b87a279c3a10ca",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/ddc9c5ffb361c9fed23b50adadbbcb2b9350f503"
        },
        "date": 1704503168709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.46249554528015,
            "unit": "iter/sec",
            "range": "stddev: 0.001386768592079233",
            "extra": "mean: 3.295300126637192 msec\nrounds: 229"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1740.1073909318723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591438365509031",
            "extra": "mean: 574.6771752199007 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.53807285633724,
            "unit": "iter/sec",
            "range": "stddev: 0.004324574924223331",
            "extra": "mean: 282.63974220000705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.659114195627938,
            "unit": "iter/sec",
            "range": "stddev: 0.012599476618643217",
            "extra": "mean: 85.7698091999983 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.4400336114723,
            "unit": "iter/sec",
            "range": "stddev: 0.002151496253312929",
            "extra": "mean: 5.832943326797637 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.867058193137066,
            "unit": "iter/sec",
            "range": "stddev: 0.013007507910466325",
            "extra": "mean: 84.26688263636545 msec\nrounds: 11"
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
          "id": "ddc9c5ffb361c9fed23b50adadbbcb2b9350f503",
          "message": "fix: between operator works with SQLAlchemy 2.0",
          "timestamp": "2024-01-06T02:03:56+01:00",
          "tree_id": "02c1fbed3d9ef7ea216137bce8b87a279c3a10ca",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/ddc9c5ffb361c9fed23b50adadbbcb2b9350f503"
        },
        "date": 1704503168709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.46249554528015,
            "unit": "iter/sec",
            "range": "stddev: 0.001386768592079233",
            "extra": "mean: 3.295300126637192 msec\nrounds: 229"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1740.1073909318723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591438365509031",
            "extra": "mean: 574.6771752199007 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.53807285633724,
            "unit": "iter/sec",
            "range": "stddev: 0.004324574924223331",
            "extra": "mean: 282.63974220000705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.659114195627938,
            "unit": "iter/sec",
            "range": "stddev: 0.012599476618643217",
            "extra": "mean: 85.7698091999983 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.4400336114723,
            "unit": "iter/sec",
            "range": "stddev: 0.002151496253312929",
            "extra": "mean: 5.832943326797637 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.867058193137066,
            "unit": "iter/sec",
            "range": "stddev: 0.013007507910466325",
            "extra": "mean: 84.26688263636545 msec\nrounds: 11"
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
          "id": "f823d1955407017b46b6ed3d14323bea9fe6097d",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/f823d1955407017b46b6ed3d14323bea9fe6097d"
        },
        "date": 1704503235159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.7180426219738,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972125692294132",
            "extra": "mean: 3.2709878403759087 msec\nrounds: 213"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.9162682696822,
            "unit": "iter/sec",
            "range": "stddev: 0.000015016403811809908",
            "extra": "mean: 573.0934017777447 usec\nrounds: 1125"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.198678465735977,
            "unit": "iter/sec",
            "range": "stddev: 0.01747955984547521",
            "extra": "mean: 312.62910940000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.93221032287636,
            "unit": "iter/sec",
            "range": "stddev: 0.011513716433287953",
            "extra": "mean: 71.77611999999911 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.7297367941233,
            "unit": "iter/sec",
            "range": "stddev: 0.002006178462880481",
            "extra": "mean: 5.891719500001156 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.767604361420458,
            "unit": "iter/sec",
            "range": "stddev: 0.011574815290957887",
            "extra": "mean: 72.63427781249999 msec\nrounds: 16"
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
          "id": "f823d1955407017b46b6ed3d14323bea9fe6097d",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/f823d1955407017b46b6ed3d14323bea9fe6097d"
        },
        "date": 1704503235159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.7180426219738,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972125692294132",
            "extra": "mean: 3.2709878403759087 msec\nrounds: 213"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.9162682696822,
            "unit": "iter/sec",
            "range": "stddev: 0.000015016403811809908",
            "extra": "mean: 573.0934017777447 usec\nrounds: 1125"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.198678465735977,
            "unit": "iter/sec",
            "range": "stddev: 0.01747955984547521",
            "extra": "mean: 312.62910940000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.93221032287636,
            "unit": "iter/sec",
            "range": "stddev: 0.011513716433287953",
            "extra": "mean: 71.77611999999911 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.7297367941233,
            "unit": "iter/sec",
            "range": "stddev: 0.002006178462880481",
            "extra": "mean: 5.891719500001156 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.767604361420458,
            "unit": "iter/sec",
            "range": "stddev: 0.011574815290957887",
            "extra": "mean: 72.63427781249999 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}
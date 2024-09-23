window.BENCHMARK_DATA = {
  "lastUpdate": 1727126823348,
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
          "id": "3093d2b31aa3e2bd1e6196bfe81769742665346b",
          "message": "give names to test jobs",
          "timestamp": "2024-01-06T02:06:09+01:00",
          "tree_id": "05ca8fcdff2515de26747e162da47e829e4c13bd",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3093d2b31aa3e2bd1e6196bfe81769742665346b"
        },
        "date": 1704503242404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.8161739928231,
            "unit": "iter/sec",
            "range": "stddev: 0.0013880114813918515",
            "extra": "mean: 3.217335787754374 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1805.2894717263978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014525784841137322",
            "extra": "mean: 553.9277859099795 usec\nrounds: 1462"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203221060952644,
            "unit": "iter/sec",
            "range": "stddev: 0.012197262674942755",
            "extra": "mean: 237.91277820000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.933099235327962,
            "unit": "iter/sec",
            "range": "stddev: 0.011906246710793461",
            "extra": "mean: 77.32098716666513 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.60838634435984,
            "unit": "iter/sec",
            "range": "stddev: 0.0016986893756964954",
            "extra": "mean: 5.662245268750432 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.55765041390068,
            "unit": "iter/sec",
            "range": "stddev: 0.011048854141115642",
            "extra": "mean: 73.75909316666689 msec\nrounds: 12"
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
          "id": "3093d2b31aa3e2bd1e6196bfe81769742665346b",
          "message": "give names to test jobs",
          "timestamp": "2024-01-06T02:06:09+01:00",
          "tree_id": "05ca8fcdff2515de26747e162da47e829e4c13bd",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3093d2b31aa3e2bd1e6196bfe81769742665346b"
        },
        "date": 1704503242404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.8161739928231,
            "unit": "iter/sec",
            "range": "stddev: 0.0013880114813918515",
            "extra": "mean: 3.217335787754374 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1805.2894717263978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014525784841137322",
            "extra": "mean: 553.9277859099795 usec\nrounds: 1462"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203221060952644,
            "unit": "iter/sec",
            "range": "stddev: 0.012197262674942755",
            "extra": "mean: 237.91277820000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.933099235327962,
            "unit": "iter/sec",
            "range": "stddev: 0.011906246710793461",
            "extra": "mean: 77.32098716666513 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.60838634435984,
            "unit": "iter/sec",
            "range": "stddev: 0.0016986893756964954",
            "extra": "mean: 5.662245268750432 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.55765041390068,
            "unit": "iter/sec",
            "range": "stddev: 0.011048854141115642",
            "extra": "mean: 73.75909316666689 msec\nrounds: 12"
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
          "id": "b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b",
          "message": "remove redundant pdm install in 2.0 tests",
          "timestamp": "2024-01-06T02:09:54+01:00",
          "tree_id": "75d059d1d37e3b3a2c636110cc56b500ef84fc4d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b"
        },
        "date": 1704503440764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.59997707142855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011053829689863755",
            "extra": "mean: 3.441156500002762 msec\nrounds: 230"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1691.2178464905624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018888927280879356",
            "extra": "mean: 591.2898814751128 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.069039795345974,
            "unit": "iter/sec",
            "range": "stddev: 0.013827383571225458",
            "extra": "mean: 245.75822559999665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.516000305363008,
            "unit": "iter/sec",
            "range": "stddev: 0.010109687160134507",
            "extra": "mean: 73.98638483333049 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.49742213446714,
            "unit": "iter/sec",
            "range": "stddev: 0.0016542340290892096",
            "extra": "mean: 5.934808896969137 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.28324885827208,
            "unit": "iter/sec",
            "range": "stddev: 0.010357091812698557",
            "extra": "mean: 75.28278741666838 msec\nrounds: 12"
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
          "id": "b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b",
          "message": "remove redundant pdm install in 2.0 tests",
          "timestamp": "2024-01-06T02:09:54+01:00",
          "tree_id": "75d059d1d37e3b3a2c636110cc56b500ef84fc4d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b"
        },
        "date": 1704503440764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.59997707142855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011053829689863755",
            "extra": "mean: 3.441156500002762 msec\nrounds: 230"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1691.2178464905624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018888927280879356",
            "extra": "mean: 591.2898814751128 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.069039795345974,
            "unit": "iter/sec",
            "range": "stddev: 0.013827383571225458",
            "extra": "mean: 245.75822559999665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.516000305363008,
            "unit": "iter/sec",
            "range": "stddev: 0.010109687160134507",
            "extra": "mean: 73.98638483333049 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.49742213446714,
            "unit": "iter/sec",
            "range": "stddev: 0.0016542340290892096",
            "extra": "mean: 5.934808896969137 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.28324885827208,
            "unit": "iter/sec",
            "range": "stddev: 0.010357091812698557",
            "extra": "mean: 75.28278741666838 msec\nrounds: 12"
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
          "id": "4df9b3ebd408eb5c4578a477ae9111f49e510d06",
          "message": "only test on ubuntu-latest",
          "timestamp": "2024-01-06T02:11:38+01:00",
          "tree_id": "0fd39af9cc04a3baabd2fe4c1303baea9b8721a5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4df9b3ebd408eb5c4578a477ae9111f49e510d06"
        },
        "date": 1704503548431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.2306721772933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013121913776321398",
            "extra": "mean: 3.2762107191480085 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1757.5170461415344,
            "unit": "iter/sec",
            "range": "stddev: 0.000014839160171101925",
            "extra": "mean: 568.9845240451052 usec\nrounds: 1414"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.353673786368423,
            "unit": "iter/sec",
            "range": "stddev: 0.009925199077333562",
            "extra": "mean: 229.6910722000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.976865138159571,
            "unit": "iter/sec",
            "range": "stddev: 0.008754079705332053",
            "extra": "mean: 71.54680181250406 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.36357080766527,
            "unit": "iter/sec",
            "range": "stddev: 0.0016032869226793119",
            "extra": "mean: 5.702438627329145 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.650880550732271,
            "unit": "iter/sec",
            "range": "stddev: 0.009508515440196022",
            "extra": "mean: 73.25534761538567 msec\nrounds: 13"
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
          "id": "4df9b3ebd408eb5c4578a477ae9111f49e510d06",
          "message": "only test on ubuntu-latest",
          "timestamp": "2024-01-06T02:11:38+01:00",
          "tree_id": "0fd39af9cc04a3baabd2fe4c1303baea9b8721a5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4df9b3ebd408eb5c4578a477ae9111f49e510d06"
        },
        "date": 1704503548431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.2306721772933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013121913776321398",
            "extra": "mean: 3.2762107191480085 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1757.5170461415344,
            "unit": "iter/sec",
            "range": "stddev: 0.000014839160171101925",
            "extra": "mean: 568.9845240451052 usec\nrounds: 1414"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.353673786368423,
            "unit": "iter/sec",
            "range": "stddev: 0.009925199077333562",
            "extra": "mean: 229.6910722000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.976865138159571,
            "unit": "iter/sec",
            "range": "stddev: 0.008754079705332053",
            "extra": "mean: 71.54680181250406 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.36357080766527,
            "unit": "iter/sec",
            "range": "stddev: 0.0016032869226793119",
            "extra": "mean: 5.702438627329145 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.650880550732271,
            "unit": "iter/sec",
            "range": "stddev: 0.009508515440196022",
            "extra": "mean: 73.25534761538567 msec\nrounds: 13"
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
          "id": "28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b",
          "message": "merge coverages",
          "timestamp": "2024-01-06T02:17:52+01:00",
          "tree_id": "f25cef33ab5d11891489872520d4e2f9d7633a3c",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b"
        },
        "date": 1704503919183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.77828503428213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524337848427137",
            "extra": "mean: 3.176839215230781 msec\nrounds: 302"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1817.8198602530774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015795270629539344",
            "extra": "mean: 550.1095140751623 usec\nrounds: 1492"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 5.2470379952370685,
            "unit": "iter/sec",
            "range": "stddev: 0.006338356365049616",
            "extra": "mean: 190.58371616667102 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.340531030868977,
            "unit": "iter/sec",
            "range": "stddev: 0.006382522653477564",
            "extra": "mean: 65.1867916428545 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.22996955302497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011401410400222803",
            "extra": "mean: 5.548466786517393 msec\nrounds: 178"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.240941252058226,
            "unit": "iter/sec",
            "range": "stddev: 0.006454789112914441",
            "extra": "mean: 65.61274552941106 msec\nrounds: 17"
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
          "id": "28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b",
          "message": "merge coverages",
          "timestamp": "2024-01-06T02:17:52+01:00",
          "tree_id": "f25cef33ab5d11891489872520d4e2f9d7633a3c",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b"
        },
        "date": 1704503919183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.77828503428213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524337848427137",
            "extra": "mean: 3.176839215230781 msec\nrounds: 302"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1817.8198602530774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015795270629539344",
            "extra": "mean: 550.1095140751623 usec\nrounds: 1492"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 5.2470379952370685,
            "unit": "iter/sec",
            "range": "stddev: 0.006338356365049616",
            "extra": "mean: 190.58371616667102 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.340531030868977,
            "unit": "iter/sec",
            "range": "stddev: 0.006382522653477564",
            "extra": "mean: 65.1867916428545 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.22996955302497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011401410400222803",
            "extra": "mean: 5.548466786517393 msec\nrounds: 178"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.240941252058226,
            "unit": "iter/sec",
            "range": "stddev: 0.006454789112914441",
            "extra": "mean: 65.61274552941106 msec\nrounds: 17"
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
          "id": "d6334d219aa80d13262cfa69972636f51d61f5e0",
          "message": "remove pdm install from publish script",
          "timestamp": "2024-01-06T02:31:44+01:00",
          "tree_id": "6551948ad45f08df88fa5f4ad329919741098135",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d6334d219aa80d13262cfa69972636f51d61f5e0"
        },
        "date": 1704504795901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.94274100664177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011539735742551157",
            "extra": "mean: 3.236845755759323 msec\nrounds: 217"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1820.853355435364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024926950211151592",
            "extra": "mean: 549.1930456754993 usec\nrounds: 1445"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.3600517136666,
            "unit": "iter/sec",
            "range": "stddev: 0.007214231656399887",
            "extra": "mean: 229.35507779999398 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.344432969865071,
            "unit": "iter/sec",
            "range": "stddev: 0.008668913568281084",
            "extra": "mean: 69.71345623077679 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.09813295968647,
            "unit": "iter/sec",
            "range": "stddev: 0.001987401448231605",
            "extra": "mean: 5.711083168603711 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.181450273137877,
            "unit": "iter/sec",
            "range": "stddev: 0.008817955003617399",
            "extra": "mean: 70.51464982352145 msec\nrounds: 17"
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
          "id": "d6334d219aa80d13262cfa69972636f51d61f5e0",
          "message": "remove pdm install from publish script",
          "timestamp": "2024-01-06T02:31:44+01:00",
          "tree_id": "6551948ad45f08df88fa5f4ad329919741098135",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d6334d219aa80d13262cfa69972636f51d61f5e0"
        },
        "date": 1704504795901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.94274100664177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011539735742551157",
            "extra": "mean: 3.236845755759323 msec\nrounds: 217"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1820.853355435364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024926950211151592",
            "extra": "mean: 549.1930456754993 usec\nrounds: 1445"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.3600517136666,
            "unit": "iter/sec",
            "range": "stddev: 0.007214231656399887",
            "extra": "mean: 229.35507779999398 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.344432969865071,
            "unit": "iter/sec",
            "range": "stddev: 0.008668913568281084",
            "extra": "mean: 69.71345623077679 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.09813295968647,
            "unit": "iter/sec",
            "range": "stddev: 0.001987401448231605",
            "extra": "mean: 5.711083168603711 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.181450273137877,
            "unit": "iter/sec",
            "range": "stddev: 0.008817955003617399",
            "extra": "mean: 70.51464982352145 msec\nrounds: 17"
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
          "id": "9a6349ade4495461069a75af417d489b184bb699",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/9a6349ade4495461069a75af417d489b184bb699"
        },
        "date": 1704548647153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.9846903249345,
            "unit": "iter/sec",
            "range": "stddev: 0.0013219029545522415",
            "extra": "mean: 2.9587138962969353 msec\nrounds: 270"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2006.3090877499515,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980211315934465",
            "extra": "mean: 498.4276879897336 usec\nrounds: 1532"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.570650585060405,
            "unit": "iter/sec",
            "range": "stddev: 0.010419099310687394",
            "extra": "mean: 218.78723420000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.063965201105066,
            "unit": "iter/sec",
            "range": "stddev: 0.009200250688567923",
            "extra": "mean: 58.603026214284576 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.67508204590936,
            "unit": "iter/sec",
            "range": "stddev: 0.001823695076934299",
            "extra": "mean: 5.565602022346575 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.85554037082148,
            "unit": "iter/sec",
            "range": "stddev: 0.00943796124061081",
            "extra": "mean: 59.32767374999699 msec\nrounds: 20"
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
          "id": "9a6349ade4495461069a75af417d489b184bb699",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/9a6349ade4495461069a75af417d489b184bb699"
        },
        "date": 1704548647153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.9846903249345,
            "unit": "iter/sec",
            "range": "stddev: 0.0013219029545522415",
            "extra": "mean: 2.9587138962969353 msec\nrounds: 270"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2006.3090877499515,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980211315934465",
            "extra": "mean: 498.4276879897336 usec\nrounds: 1532"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.570650585060405,
            "unit": "iter/sec",
            "range": "stddev: 0.010419099310687394",
            "extra": "mean: 218.78723420000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.063965201105066,
            "unit": "iter/sec",
            "range": "stddev: 0.009200250688567923",
            "extra": "mean: 58.603026214284576 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.67508204590936,
            "unit": "iter/sec",
            "range": "stddev: 0.001823695076934299",
            "extra": "mean: 5.565602022346575 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.85554037082148,
            "unit": "iter/sec",
            "range": "stddev: 0.00943796124061081",
            "extra": "mean: 59.32767374999699 msec\nrounds: 20"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ede37a5264447b77ab877cefd0ec13998df4e7a",
          "message": "add missing py.typed marker",
          "timestamp": "2024-01-08T09:42:47+01:00",
          "tree_id": "a753baae4b8a12a57898bb7f9eeedc1c82398411",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3ede37a5264447b77ab877cefd0ec13998df4e7a"
        },
        "date": 1704703413580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.53273068920953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384272183364228",
            "extra": "mean: 3.4301465829785567 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.4917681419356,
            "unit": "iter/sec",
            "range": "stddev: 0.00002593746505124345",
            "extra": "mean: 573.2328568481028 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.998775162371685,
            "unit": "iter/sec",
            "range": "stddev: 0.010010235647176962",
            "extra": "mean: 250.07657579999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.048067061824048,
            "unit": "iter/sec",
            "range": "stddev: 0.010893547399805149",
            "extra": "mean: 76.6397042000032 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.57257104497407,
            "unit": "iter/sec",
            "range": "stddev: 0.0021716595896523402",
            "extra": "mean: 5.897180150289635 msec\nrounds: 173"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.369984903760894,
            "unit": "iter/sec",
            "range": "stddev: 0.009305003697002118",
            "extra": "mean: 74.7944000833319 msec\nrounds: 12"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ede37a5264447b77ab877cefd0ec13998df4e7a",
          "message": "add missing py.typed marker",
          "timestamp": "2024-01-08T09:42:47+01:00",
          "tree_id": "a753baae4b8a12a57898bb7f9eeedc1c82398411",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3ede37a5264447b77ab877cefd0ec13998df4e7a"
        },
        "date": 1704703413580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.53273068920953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384272183364228",
            "extra": "mean: 3.4301465829785567 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.4917681419356,
            "unit": "iter/sec",
            "range": "stddev: 0.00002593746505124345",
            "extra": "mean: 573.2328568481028 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.998775162371685,
            "unit": "iter/sec",
            "range": "stddev: 0.010010235647176962",
            "extra": "mean: 250.07657579999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.048067061824048,
            "unit": "iter/sec",
            "range": "stddev: 0.010893547399805149",
            "extra": "mean: 76.6397042000032 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.57257104497407,
            "unit": "iter/sec",
            "range": "stddev: 0.0021716595896523402",
            "extra": "mean: 5.897180150289635 msec\nrounds: 173"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.369984903760894,
            "unit": "iter/sec",
            "range": "stddev: 0.009305003697002118",
            "extra": "mean: 74.7944000833319 msec\nrounds: 12"
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
          "id": "67ca0061a0b1c6c7351c0b85be648ecaedcdd518",
          "message": "pre-commit fix",
          "timestamp": "2024-01-08T18:51:10+01:00",
          "tree_id": "48cd03684c1c4d32d3dabe1b5732aef6c86783d5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/67ca0061a0b1c6c7351c0b85be648ecaedcdd518"
        },
        "date": 1704736322756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 325.05065108806843,
            "unit": "iter/sec",
            "range": "stddev: 0.001246066535913128",
            "extra": "mean: 3.076443614718564 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1864.3308287370185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163579186144175",
            "extra": "mean: 536.3854872675388 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.948451833634105,
            "unit": "iter/sec",
            "range": "stddev: 0.017841666917469547",
            "extra": "mean: 253.26382139999737 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.743859672993834,
            "unit": "iter/sec",
            "range": "stddev: 0.017496027130011287",
            "extra": "mean: 72.7597649999994 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.98963632200568,
            "unit": "iter/sec",
            "range": "stddev: 0.003292176177724917",
            "extra": "mean: 6.060986752212289 msec\nrounds: 113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.738102790327096,
            "unit": "iter/sec",
            "range": "stddev: 0.01819623570472296",
            "extra": "mean: 78.50462635294227 msec\nrounds: 17"
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
          "id": "67ca0061a0b1c6c7351c0b85be648ecaedcdd518",
          "message": "pre-commit fix",
          "timestamp": "2024-01-08T18:51:10+01:00",
          "tree_id": "48cd03684c1c4d32d3dabe1b5732aef6c86783d5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/67ca0061a0b1c6c7351c0b85be648ecaedcdd518"
        },
        "date": 1704736322756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 325.05065108806843,
            "unit": "iter/sec",
            "range": "stddev: 0.001246066535913128",
            "extra": "mean: 3.076443614718564 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1864.3308287370185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163579186144175",
            "extra": "mean: 536.3854872675388 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.948451833634105,
            "unit": "iter/sec",
            "range": "stddev: 0.017841666917469547",
            "extra": "mean: 253.26382139999737 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.743859672993834,
            "unit": "iter/sec",
            "range": "stddev: 0.017496027130011287",
            "extra": "mean: 72.7597649999994 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.98963632200568,
            "unit": "iter/sec",
            "range": "stddev: 0.003292176177724917",
            "extra": "mean: 6.060986752212289 msec\nrounds: 113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.738102790327096,
            "unit": "iter/sec",
            "range": "stddev: 0.01819623570472296",
            "extra": "mean: 78.50462635294227 msec\nrounds: 17"
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
          "id": "07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d"
        },
        "date": 1704743116917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.1899517679073,
            "unit": "iter/sec",
            "range": "stddev: 0.0012186834473829776",
            "extra": "mean: 3.2553148117147233 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1787.4319732403314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940491051146442",
            "extra": "mean: 559.4618508402075 usec\nrounds: 1428"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203674655315292,
            "unit": "iter/sec",
            "range": "stddev: 0.009876973611384112",
            "extra": "mean: 237.8871064000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.8040876622973,
            "unit": "iter/sec",
            "range": "stddev: 0.01301772041086996",
            "extra": "mean: 72.44231016666684 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.6646741950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0026651933139128867",
            "extra": "mean: 5.928923793749696 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017142146754667,
            "unit": "iter/sec",
            "range": "stddev: 0.011578611863971315",
            "extra": "mean: 71.34121845454254 msec\nrounds: 11"
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
          "id": "07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d"
        },
        "date": 1704743116917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.1899517679073,
            "unit": "iter/sec",
            "range": "stddev: 0.0012186834473829776",
            "extra": "mean: 3.2553148117147233 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1787.4319732403314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940491051146442",
            "extra": "mean: 559.4618508402075 usec\nrounds: 1428"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203674655315292,
            "unit": "iter/sec",
            "range": "stddev: 0.009876973611384112",
            "extra": "mean: 237.8871064000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.8040876622973,
            "unit": "iter/sec",
            "range": "stddev: 0.01301772041086996",
            "extra": "mean: 72.44231016666684 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.6646741950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0026651933139128867",
            "extra": "mean: 5.928923793749696 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017142146754667,
            "unit": "iter/sec",
            "range": "stddev: 0.011578611863971315",
            "extra": "mean: 71.34121845454254 msec\nrounds: 11"
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
          "id": "54850ed84a25dc8e6265b08998f8085a759bc33f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/54850ed84a25dc8e6265b08998f8085a759bc33f"
        },
        "date": 1705346439563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.9112919355889,
            "unit": "iter/sec",
            "range": "stddev: 0.0011335421778783427",
            "extra": "mean: 3.279642395832442 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1728.2107481264943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416247426255946",
            "extra": "mean: 578.6331331893824 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.116920468857678,
            "unit": "iter/sec",
            "range": "stddev: 0.014510710716704496",
            "extra": "mean: 242.90000440000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.147189486437256,
            "unit": "iter/sec",
            "range": "stddev: 0.011563587145714167",
            "extra": "mean: 76.06188387499913 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.2043675477185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020935180333571933",
            "extra": "mean: 5.840972484076831 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.028639861501112,
            "unit": "iter/sec",
            "range": "stddev: 0.011124045937749367",
            "extra": "mean: 76.753982812507 msec\nrounds: 16"
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
          "id": "54850ed84a25dc8e6265b08998f8085a759bc33f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/54850ed84a25dc8e6265b08998f8085a759bc33f"
        },
        "date": 1705346439563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.9112919355889,
            "unit": "iter/sec",
            "range": "stddev: 0.0011335421778783427",
            "extra": "mean: 3.279642395832442 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1728.2107481264943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416247426255946",
            "extra": "mean: 578.6331331893824 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.116920468857678,
            "unit": "iter/sec",
            "range": "stddev: 0.014510710716704496",
            "extra": "mean: 242.90000440000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.147189486437256,
            "unit": "iter/sec",
            "range": "stddev: 0.011563587145714167",
            "extra": "mean: 76.06188387499913 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.2043675477185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020935180333571933",
            "extra": "mean: 5.840972484076831 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.028639861501112,
            "unit": "iter/sec",
            "range": "stddev: 0.011124045937749367",
            "extra": "mean: 76.753982812507 msec\nrounds: 16"
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
          "id": "e42d803ff90df73ca06ba2bcc6983b6485dbf05e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/e42d803ff90df73ca06ba2bcc6983b6485dbf05e"
        },
        "date": 1705951648806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.8334784826381,
            "unit": "iter/sec",
            "range": "stddev: 0.0013705817033131363",
            "extra": "mean: 3.3351846000009138 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.083980572055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015194871005291838",
            "extra": "mean: 574.0251395180306 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.971046814933669,
            "unit": "iter/sec",
            "range": "stddev: 0.01448562872819382",
            "extra": "mean: 251.82276780000734 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.574805862487338,
            "unit": "iter/sec",
            "range": "stddev: 0.011998085225578407",
            "extra": "mean: 79.52409054545808 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.22266499169245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015340988176658734",
            "extra": "mean: 5.739781331250349 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.13752093694752,
            "unit": "iter/sec",
            "range": "stddev: 0.012568466982519904",
            "extra": "mean: 82.38914727272893 msec\nrounds: 11"
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
          "id": "e42d803ff90df73ca06ba2bcc6983b6485dbf05e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/e42d803ff90df73ca06ba2bcc6983b6485dbf05e"
        },
        "date": 1705951648806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.8334784826381,
            "unit": "iter/sec",
            "range": "stddev: 0.0013705817033131363",
            "extra": "mean: 3.3351846000009138 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.083980572055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015194871005291838",
            "extra": "mean: 574.0251395180306 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.971046814933669,
            "unit": "iter/sec",
            "range": "stddev: 0.01448562872819382",
            "extra": "mean: 251.82276780000734 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.574805862487338,
            "unit": "iter/sec",
            "range": "stddev: 0.011998085225578407",
            "extra": "mean: 79.52409054545808 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.22266499169245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015340988176658734",
            "extra": "mean: 5.739781331250349 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.13752093694752,
            "unit": "iter/sec",
            "range": "stddev: 0.012568466982519904",
            "extra": "mean: 82.38914727272893 msec\nrounds: 11"
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
          "id": "2e57bf8aad38b331462ed8d07a30dbfe6e308b55",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/10/commits/2e57bf8aad38b331462ed8d07a30dbfe6e308b55"
        },
        "date": 1706181661544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.13233004725066,
            "unit": "iter/sec",
            "range": "stddev: 0.0017808295696648971",
            "extra": "mean: 3.3998302731269145 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1690.0051564725889,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619305031520113",
            "extra": "mean: 591.7141709124836 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.675535442832819,
            "unit": "iter/sec",
            "range": "stddev: 0.014346976171545862",
            "extra": "mean: 272.0692034000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.493107622818972,
            "unit": "iter/sec",
            "range": "stddev: 0.01617425083046361",
            "extra": "mean: 87.00866926666133 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.84393590842305,
            "unit": "iter/sec",
            "range": "stddev: 0.002163744776105302",
            "extra": "mean: 5.9226290516135345 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.249611823442443,
            "unit": "iter/sec",
            "range": "stddev: 0.014727710223678359",
            "extra": "mean: 81.63523990909414 msec\nrounds: 11"
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
          "id": "2e57bf8aad38b331462ed8d07a30dbfe6e308b55",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/10/commits/2e57bf8aad38b331462ed8d07a30dbfe6e308b55"
        },
        "date": 1706181661544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.13233004725066,
            "unit": "iter/sec",
            "range": "stddev: 0.0017808295696648971",
            "extra": "mean: 3.3998302731269145 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1690.0051564725889,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619305031520113",
            "extra": "mean: 591.7141709124836 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.675535442832819,
            "unit": "iter/sec",
            "range": "stddev: 0.014346976171545862",
            "extra": "mean: 272.0692034000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.493107622818972,
            "unit": "iter/sec",
            "range": "stddev: 0.01617425083046361",
            "extra": "mean: 87.00866926666133 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.84393590842305,
            "unit": "iter/sec",
            "range": "stddev: 0.002163744776105302",
            "extra": "mean: 5.9226290516135345 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.249611823442443,
            "unit": "iter/sec",
            "range": "stddev: 0.014727710223678359",
            "extra": "mean: 81.63523990909414 msec\nrounds: 11"
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
          "id": "2768e52c3d70c1671cd6cb8bb5d714f846c7f1f7",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/2768e52c3d70c1671cd6cb8bb5d714f846c7f1f7"
        },
        "date": 1706557292214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.8565342185285,
            "unit": "iter/sec",
            "range": "stddev: 0.0011763920847215237",
            "extra": "mean: 3.32384338135613 msec\nrounds: 236"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1695.006034661617,
            "unit": "iter/sec",
            "range": "stddev: 0.00047054200453307195",
            "extra": "mean: 589.9684010267464 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.37073625117708,
            "unit": "iter/sec",
            "range": "stddev: 0.010123674421044013",
            "extra": "mean: 228.79440500000214 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.028469831819354,
            "unit": "iter/sec",
            "range": "stddev: 0.01048796726956136",
            "extra": "mean: 76.75498449999907 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.07256874454134,
            "unit": "iter/sec",
            "range": "stddev: 0.0016745058473752004",
            "extra": "mean: 5.744730529412369 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.434348573660076,
            "unit": "iter/sec",
            "range": "stddev: 0.008967289772685925",
            "extra": "mean: 74.43606175000106 msec\nrounds: 16"
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
          "id": "7853d8d5536139a920a1459491a010461fe8627e",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4 (#10)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T22:16:13+01:00",
          "tree_id": "25ba3a63bd29c8b9cd884f1f855700115d832e7a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7853d8d5536139a920a1459491a010461fe8627e"
        },
        "date": 1706649435635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.8451255429296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004387811938149913",
            "extra": "mean: 3.0317258693879023 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1866.222985239883,
            "unit": "iter/sec",
            "range": "stddev: 0.000017262708640356327",
            "extra": "mean: 535.8416480287112 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.1251208425633767,
            "unit": "iter/sec",
            "range": "stddev: 0.01613233759637658",
            "extra": "mean: 319.98762620000036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 10.84228744424982,
            "unit": "iter/sec",
            "range": "stddev: 0.01863915281967208",
            "extra": "mean: 92.23145993333239 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.69217140419067,
            "unit": "iter/sec",
            "range": "stddev: 0.00035319356172528577",
            "extra": "mean: 5.627709944099518 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.578089573010034,
            "unit": "iter/sec",
            "range": "stddev: 0.016494349409603756",
            "extra": "mean: 86.37003485714294 msec\nrounds: 14"
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
          "id": "a8e4749fa45df00a27fbf48089bc96c73623bc6e",
          "message": "merge coverages",
          "timestamp": "2024-01-30T22:29:13+01:00",
          "tree_id": "4b86fa4c544a627cbee22342a3b860e8c7911e14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/a8e4749fa45df00a27fbf48089bc96c73623bc6e"
        },
        "date": 1706650206150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.51518419180513,
            "unit": "iter/sec",
            "range": "stddev: 0.0014379601562373601",
            "extra": "mean: 3.2308592633707582 msec\nrounds: 243"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.3662851101212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997839163310978",
            "extra": "mean: 573.932133872068 usec\nrounds: 1113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.230985372933855,
            "unit": "iter/sec",
            "range": "stddev: 0.012031775007064382",
            "extra": "mean: 236.35156160007682 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.18160642330591,
            "unit": "iter/sec",
            "range": "stddev: 0.013838703936669989",
            "extra": "mean: 75.86328766666384 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.6083009793411,
            "unit": "iter/sec",
            "range": "stddev: 0.00227909952269278",
            "extra": "mean: 5.760093234936947 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.4678736084523,
            "unit": "iter/sec",
            "range": "stddev: 0.013680553114275995",
            "extra": "mean: 74.2507710625091 msec\nrounds: 16"
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
          "id": "d858437c2e0a6d20ef7d55a8b94aa651f1488243",
          "message": "chore(deps): update actions/download-artifact action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/11/commits/d858437c2e0a6d20ef7d55a8b94aa651f1488243"
        },
        "date": 1706650233691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.32227804521676,
            "unit": "iter/sec",
            "range": "stddev: 0.0016503795452437573",
            "extra": "mean: 3.517135578946671 msec\nrounds: 171"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1685.5976333538365,
            "unit": "iter/sec",
            "range": "stddev: 0.000011074604271654716",
            "extra": "mean: 593.2613929994066 usec\nrounds: 1257"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.872756234733309,
            "unit": "iter/sec",
            "range": "stddev: 0.011919558910088831",
            "extra": "mean: 258.2140314000071 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.117245801503866,
            "unit": "iter/sec",
            "range": "stddev: 0.012510615310029971",
            "extra": "mean: 82.52700459999667 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 163.29155230450024,
            "unit": "iter/sec",
            "range": "stddev: 0.0016628252455736295",
            "extra": "mean: 6.124015516339974 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.231277104614042,
            "unit": "iter/sec",
            "range": "stddev: 0.013517750801733544",
            "extra": "mean: 81.75761136363815 msec\nrounds: 11"
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
          "id": "6308bf7261c0df9e5b7b2428022b79e847c817bd",
          "message": "chore(deps): update actions/upload-artifact action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/12/commits/6308bf7261c0df9e5b7b2428022b79e847c817bd"
        },
        "date": 1706650236645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.57241600736467,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863868987213255",
            "extra": "mean: 3.2198609678725845 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1839.6892019750987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000144607866481076",
            "extra": "mean: 543.5700763620265 usec\nrounds: 1100"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.299117563472915,
            "unit": "iter/sec",
            "range": "stddev: 0.011900538983301009",
            "extra": "mean: 232.60587439999654 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.625767412188019,
            "unit": "iter/sec",
            "range": "stddev: 0.010549221176141209",
            "extra": "mean: 68.37248069230711 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.56096962964932,
            "unit": "iter/sec",
            "range": "stddev: 0.002103554329943729",
            "extra": "mean: 5.663765905327658 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.1264524354095,
            "unit": "iter/sec",
            "range": "stddev: 0.011848633515202904",
            "extra": "mean: 70.78918111764499 msec\nrounds: 17"
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
          "id": "c2da61441ace18cd27376e5fa00224f551534362",
          "message": "define pytest args in noxfile",
          "timestamp": "2024-01-30T22:37:11+01:00",
          "tree_id": "da26f8cb6fe6ce4788c232cb1f20767f30821382",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c2da61441ace18cd27376e5fa00224f551534362"
        },
        "date": 1706650681871,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.27465421365594,
            "unit": "iter/sec",
            "range": "stddev: 0.0012240659154996757",
            "extra": "mean: 3.3981859656657947 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1755.9988387330343,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729404833753922",
            "extra": "mean: 569.4764586071749 usec\nrounds: 761"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.404763197454988,
            "unit": "iter/sec",
            "range": "stddev: 0.0061883017901831336",
            "extra": "mean: 227.02696040000205 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.778709274149586,
            "unit": "iter/sec",
            "range": "stddev: 0.008829372594204972",
            "extra": "mean: 72.57573841666816 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.77653037180673,
            "unit": "iter/sec",
            "range": "stddev: 0.0017316928750464925",
            "extra": "mean: 5.787823136904349 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.613507485488984,
            "unit": "iter/sec",
            "range": "stddev: 0.009227469845552469",
            "extra": "mean: 73.45645500000113 msec\nrounds: 12"
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
          "id": "7050a93ec51632ad9315d848f1e95490bca4173c",
          "message": "fix ci",
          "timestamp": "2024-01-30T22:39:14+01:00",
          "tree_id": "eddbba5b509caa6fb69cd31d02d20399cc8e806e",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7050a93ec51632ad9315d848f1e95490bca4173c"
        },
        "date": 1706650798545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.2308960371052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007848740129759671",
            "extra": "mean: 3.518266359999984 msec\nrounds: 275"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1637.6442297496583,
            "unit": "iter/sec",
            "range": "stddev: 0.000011243196686406117",
            "extra": "mean: 610.6332387913503 usec\nrounds: 1026"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9931263855759487,
            "unit": "iter/sec",
            "range": "stddev: 0.011548271532586342",
            "extra": "mean: 250.43034039999839 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.834561004441982,
            "unit": "iter/sec",
            "range": "stddev: 0.006930168927698991",
            "extra": "mean: 77.91462440000127 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.18148061929364,
            "unit": "iter/sec",
            "range": "stddev: 0.001450858680346181",
            "extra": "mean: 6.017517693748964 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.937004115535554,
            "unit": "iter/sec",
            "range": "stddev: 0.006668027225039864",
            "extra": "mean: 77.29764875000218 msec\nrounds: 12"
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
          "id": "b103945ec170e7319ec7e48eade2879781c8ec49",
          "message": "chore(deps): update codecov/codecov-action action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/13/commits/b103945ec170e7319ec7e48eade2879781c8ec49"
        },
        "date": 1706725946610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 280.06024054676595,
            "unit": "iter/sec",
            "range": "stddev: 0.0012412325591360913",
            "extra": "mean: 3.570660362383766 msec\nrounds: 218"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1613.5480580911444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006062431618130235",
            "extra": "mean: 619.7522255290105 usec\nrounds: 1042"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.598840538799087,
            "unit": "iter/sec",
            "range": "stddev: 0.010982392968238643",
            "extra": "mean: 277.86727119998886 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.211761911910806,
            "unit": "iter/sec",
            "range": "stddev: 0.010939821657409567",
            "extra": "mean: 81.88826536362822 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.76146685051006,
            "unit": "iter/sec",
            "range": "stddev: 0.0020265056613288555",
            "extra": "mean: 6.143960357143134 msec\nrounds: 140"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.312902838863705,
            "unit": "iter/sec",
            "range": "stddev: 0.011663264782153984",
            "extra": "mean: 81.21561690908989 msec\nrounds: 11"
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
          "id": "4c29c486c8da8777ec0b2ca534aa56ab75ab6b05",
          "message": "just upload coverage files from each job",
          "timestamp": "2024-02-02T19:12:29+01:00",
          "tree_id": "e93faeb22ce4f7835b06478c5a3a64beeb3f7f50",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4c29c486c8da8777ec0b2ca534aa56ab75ab6b05"
        },
        "date": 1706897601503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 278.4743433739857,
            "unit": "iter/sec",
            "range": "stddev: 0.0013842967165937556",
            "extra": "mean: 3.5909950909086774 msec\nrounds: 220"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1671.2175473046686,
            "unit": "iter/sec",
            "range": "stddev: 0.000015775289498711957",
            "extra": "mean: 598.3661442597913 usec\nrounds: 1324"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7181649305741273,
            "unit": "iter/sec",
            "range": "stddev: 0.0037372981484760474",
            "extra": "mean: 268.94987680000213 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.9284807775849,
            "unit": "iter/sec",
            "range": "stddev: 0.011575456734453862",
            "extra": "mean: 83.83297241666554 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.3322584897468,
            "unit": "iter/sec",
            "range": "stddev: 0.0016833788957055194",
            "extra": "mean: 6.012062897959405 msec\nrounds: 147"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.208677541184564,
            "unit": "iter/sec",
            "range": "stddev: 0.009638628153226697",
            "extra": "mean: 81.90895341666742 msec\nrounds: 12"
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
          "id": "6702635b935f1a9fe5bb086625aad958337ef2db",
          "message": "specify paths for coverage upload",
          "timestamp": "2024-02-03T11:44:38+01:00",
          "tree_id": "432ce30de619c18f7269e9afdfb205a80d024434",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6702635b935f1a9fe5bb086625aad958337ef2db"
        },
        "date": 1706958669121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.67302994437233,
            "unit": "iter/sec",
            "range": "stddev: 0.0010302134677079744",
            "extra": "mean: 3.188033093496571 msec\nrounds: 246"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1845.1813747398326,
            "unit": "iter/sec",
            "range": "stddev: 0.000014876864538401575",
            "extra": "mean: 541.9521428569581 usec\nrounds: 63"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.082395144497172,
            "unit": "iter/sec",
            "range": "stddev: 0.008764632902736144",
            "extra": "mean: 244.95424000000128 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.899612156527178,
            "unit": "iter/sec",
            "range": "stddev: 0.009076088520869408",
            "extra": "mean: 71.94445346666782 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.03712288653745,
            "unit": "iter/sec",
            "range": "stddev: 0.0020950520707005843",
            "extra": "mean: 5.6806199942527895 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.810377420732062,
            "unit": "iter/sec",
            "range": "stddev: 0.008822829584881967",
            "extra": "mean: 72.40931724999822 msec\nrounds: 16"
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
          "id": "2ec8521c37ddc7e60a5fde23057b5ce1e2e777dc",
          "message": "revert to codecov v3 for now",
          "timestamp": "2024-02-03T12:15:35+01:00",
          "tree_id": "896acf80fb39ead981b4f42562275917d7f7d7fe",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/2ec8521c37ddc7e60a5fde23057b5ce1e2e777dc"
        },
        "date": 1706958987792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 320.3466514514925,
            "unit": "iter/sec",
            "range": "stddev: 0.001230636918439144",
            "extra": "mean: 3.121618395163472 msec\nrounds: 248"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1904.2155397586346,
            "unit": "iter/sec",
            "range": "stddev: 0.000009073470619779747",
            "extra": "mean: 525.1506350624327 usec\nrounds: 1466"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.638912686665294,
            "unit": "iter/sec",
            "range": "stddev: 0.007844897195408557",
            "extra": "mean: 215.56775640001433 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.652086274969564,
            "unit": "iter/sec",
            "range": "stddev: 0.007299825797800005",
            "extra": "mean: 63.88924661111635 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 183.32762757654186,
            "unit": "iter/sec",
            "range": "stddev: 0.0016204199917649062",
            "extra": "mean: 5.454715217882182 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.422670639871303,
            "unit": "iter/sec",
            "range": "stddev: 0.008171536545941266",
            "extra": "mean: 64.83961327779122 msec\nrounds: 18"
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
          "id": "75bc55fcd6fa54b28ce979c084fef94ee1a04a32",
          "message": "chore(deps): update codecov/codecov-action action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/13/commits/75bc55fcd6fa54b28ce979c084fef94ee1a04a32"
        },
        "date": 1706959011235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.7707526958898,
            "unit": "iter/sec",
            "range": "stddev: 0.0010943093420175752",
            "extra": "mean: 3.2811547405857295 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1628.7067477839278,
            "unit": "iter/sec",
            "range": "stddev: 0.00046608032572938835",
            "extra": "mean: 613.9840713256901 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.191342461926321,
            "unit": "iter/sec",
            "range": "stddev: 0.006962723196405388",
            "extra": "mean: 238.58704200000034 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.440960615777076,
            "unit": "iter/sec",
            "range": "stddev: 0.008631247766546418",
            "extra": "mean: 74.39944425000355 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.25738573235307,
            "unit": "iter/sec",
            "range": "stddev: 0.0003874145605536943",
            "extra": "mean: 5.641513869046528 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.394314555650594,
            "unit": "iter/sec",
            "range": "stddev: 0.009091126696205539",
            "extra": "mean: 74.65854231250191 msec\nrounds: 16"
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
          "id": "da7cd73a661e8f52d6a23143d9ed072a08f07da4",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/da7cd73a661e8f52d6a23143d9ed072a08f07da4"
        },
        "date": 1707161642307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 311.31992686108845,
            "unit": "iter/sec",
            "range": "stddev: 0.0009265417969195563",
            "extra": "mean: 3.2121297537314466 msec\nrounds: 268"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1825.089369412728,
            "unit": "iter/sec",
            "range": "stddev: 0.000008928376504114215",
            "extra": "mean: 547.9183741680425 usec\nrounds: 1502"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.292358137447673,
            "unit": "iter/sec",
            "range": "stddev: 0.010664199821409814",
            "extra": "mean: 232.97217239999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.321582658004836,
            "unit": "iter/sec",
            "range": "stddev: 0.006649854632730948",
            "extra": "mean: 69.8246851538482 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.7864391120151,
            "unit": "iter/sec",
            "range": "stddev: 0.001693274668093592",
            "extra": "mean: 5.721267651428792 msec\nrounds: 175"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.10917681371173,
            "unit": "iter/sec",
            "range": "stddev: 0.006999098688199567",
            "extra": "mean: 70.87585712500032 msec\nrounds: 16"
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
          "id": "a8ee40117b44c9e5ff1bd87652782950ac860009",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/a8ee40117b44c9e5ff1bd87652782950ac860009"
        },
        "date": 1707779068629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.9569795339935,
            "unit": "iter/sec",
            "range": "stddev: 0.001066262472883337",
            "extra": "mean: 3.077330425196763 msec\nrounds: 254"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1862.8442849415878,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337831970925034",
            "extra": "mean: 536.8135211748826 usec\nrounds: 1464"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.414900795603008,
            "unit": "iter/sec",
            "range": "stddev: 0.008561759319527263",
            "extra": "mean: 226.50565579999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.261158960915726,
            "unit": "iter/sec",
            "range": "stddev: 0.010013288395961575",
            "extra": "mean: 65.52582294444538 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.9049735570956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538652927986457",
            "extra": "mean: 5.408183353657691 msec\nrounds: 164"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.126680783277598,
            "unit": "iter/sec",
            "range": "stddev: 0.01083843861745697",
            "extra": "mean: 66.10835611111001 msec\nrounds: 18"
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
          "id": "1e7b046c5882fcedf40ae79cfb38adb8843aa307",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/1e7b046c5882fcedf40ae79cfb38adb8843aa307"
        },
        "date": 1708385085169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.54853349744496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010454726074025707",
            "extra": "mean: 3.179159632000392 msec\nrounds: 250"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1849.9055258990104,
            "unit": "iter/sec",
            "range": "stddev: 0.000016413549666108934",
            "extra": "mean: 540.56814577816 usec\nrounds: 1516"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.773914409687748,
            "unit": "iter/sec",
            "range": "stddev: 0.0071575718041168405",
            "extra": "mean: 264.9768626000025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.833694931065354,
            "unit": "iter/sec",
            "range": "stddev: 0.011359584171484246",
            "extra": "mean: 77.91988241666796 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.30502914460666,
            "unit": "iter/sec",
            "range": "stddev: 0.0022979224805443504",
            "extra": "mean: 5.737069119046367 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.819710547686855,
            "unit": "iter/sec",
            "range": "stddev: 0.010449386172251262",
            "extra": "mean: 78.00488133333374 msec\nrounds: 15"
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
          "id": "799c4583797c689dc6051055a973aadb1e434f70",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/799c4583797c689dc6051055a973aadb1e434f70"
        },
        "date": 1710294605574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 318.53990293091243,
            "unit": "iter/sec",
            "range": "stddev: 0.0011184515654282714",
            "extra": "mean: 3.139324118576404 msec\nrounds: 253"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1869.3207906373875,
            "unit": "iter/sec",
            "range": "stddev: 0.000015692221815469355",
            "extra": "mean: 534.9536607138614 usec\nrounds: 56"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.064287921153442,
            "unit": "iter/sec",
            "range": "stddev: 0.013727215515313959",
            "extra": "mean: 246.04556059999823 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.378539186497408,
            "unit": "iter/sec",
            "range": "stddev: 0.010901646978228359",
            "extra": "mean: 69.5480943529423 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.56244350330175,
            "unit": "iter/sec",
            "range": "stddev: 0.0015385152105566852",
            "extra": "mean: 5.418220419161878 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.033865982195039,
            "unit": "iter/sec",
            "range": "stddev: 0.01264483861129091",
            "extra": "mean: 71.25620276470603 msec\nrounds: 17"
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
          "id": "d6d5eb2e9642559dc244a2de01fac3739401ebdb",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d6d5eb2e9642559dc244a2de01fac3739401ebdb"
        },
        "date": 1710795906668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 288.7375068520081,
            "unit": "iter/sec",
            "range": "stddev: 0.0012997222523693538",
            "extra": "mean: 3.463353309733149 msec\nrounds: 226"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1655.2491020865975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555373717437197",
            "extra": "mean: 604.1386754050528 usec\nrounds: 1297"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.170333348857022,
            "unit": "iter/sec",
            "range": "stddev: 0.008760855041198612",
            "extra": "mean: 239.7889847999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.697110493508633,
            "unit": "iter/sec",
            "range": "stddev: 0.010094246481481255",
            "extra": "mean: 78.75807653333784 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.1899304095564,
            "unit": "iter/sec",
            "range": "stddev: 0.0023328692870957677",
            "extra": "mean: 6.165610882715311 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.574759657596708,
            "unit": "iter/sec",
            "range": "stddev: 0.010636351750735693",
            "extra": "mean: 79.52438275000162 msec\nrounds: 12"
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
          "id": "f520cc22d8d033fb17696c9409403a25d8176721",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/f520cc22d8d033fb17696c9409403a25d8176721"
        },
        "date": 1711399896331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 321.81897546096764,
            "unit": "iter/sec",
            "range": "stddev: 0.0011412268411636495",
            "extra": "mean: 3.1073369696973843 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1886.7524625050748,
            "unit": "iter/sec",
            "range": "stddev: 0.00001322621791300255",
            "extra": "mean: 530.0112335204176 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.848485299834657,
            "unit": "iter/sec",
            "range": "stddev: 0.012799708871852413",
            "extra": "mean: 206.2499808000041 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.441361464153836,
            "unit": "iter/sec",
            "range": "stddev: 0.01154135910165949",
            "extra": "mean: 64.76112888888963 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.53360162804123,
            "unit": "iter/sec",
            "range": "stddev: 0.0016537683815748803",
            "extra": "mean: 5.539135047337779 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.528052893227501,
            "unit": "iter/sec",
            "range": "stddev: 0.01056489884674468",
            "extra": "mean: 64.39957455555462 msec\nrounds: 18"
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
          "id": "6199c944cfd08e7203b63f21da5e98b7b09b5ebd",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/6199c944cfd08e7203b63f21da5e98b7b09b5ebd"
        },
        "date": 1712005506558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 289.6617960669686,
            "unit": "iter/sec",
            "range": "stddev: 0.001127673980709817",
            "extra": "mean: 3.45230200729959 msec\nrounds: 274"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1613.7277105843723,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846763001477689",
            "extra": "mean: 619.6832299780452 usec\nrounds: 1361"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.23228798503363,
            "unit": "iter/sec",
            "range": "stddev: 0.007402238177260399",
            "extra": "mean: 236.2788174000059 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.890199829849575,
            "unit": "iter/sec",
            "range": "stddev: 0.010754736682602656",
            "extra": "mean: 77.57831633333723 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.30712119750032,
            "unit": "iter/sec",
            "range": "stddev: 0.0013474752435211164",
            "extra": "mean: 5.941519246987465 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.483457611036672,
            "unit": "iter/sec",
            "range": "stddev: 0.008302171967759078",
            "extra": "mean: 74.164952999998 msec\nrounds: 12"
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
          "id": "77f1da97886b0e9d1fff8e846c8447f869be6705",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/77f1da97886b0e9d1fff8e846c8447f869be6705"
        },
        "date": 1712611478914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.325087989105,
            "unit": "iter/sec",
            "range": "stddev: 0.0012834626283260494",
            "extra": "mean: 3.3408492643169243 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1656.317797555395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004760943272814171",
            "extra": "mean: 603.7488708241424 usec\nrounds: 1347"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.221486339477878,
            "unit": "iter/sec",
            "range": "stddev: 0.013720115468260914",
            "extra": "mean: 236.88339120000137 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.056775266609081,
            "unit": "iter/sec",
            "range": "stddev: 0.009700722697498733",
            "extra": "mean: 76.5885894166658 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.82342241973458,
            "unit": "iter/sec",
            "range": "stddev: 0.0016704183324007418",
            "extra": "mean: 5.786252731249064 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.794745645052602,
            "unit": "iter/sec",
            "range": "stddev: 0.006770477658014246",
            "extra": "mean: 72.49136923076532 msec\nrounds: 13"
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
          "id": "c3f83066913d62b5bc77e721289eb8d3e84f52bf",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/c3f83066913d62b5bc77e721289eb8d3e84f52bf"
        },
        "date": 1713215703581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 334.0729154462098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452438391535499",
            "extra": "mean: 2.993358496795031 msec\nrounds: 312"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1818.0984352617538,
            "unit": "iter/sec",
            "range": "stddev: 0.000015415030372598568",
            "extra": "mean: 550.02522449013 usec\nrounds: 49"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.68904264814084,
            "unit": "iter/sec",
            "range": "stddev: 0.011917357747789455",
            "extra": "mean: 213.2631487999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.21877121218105,
            "unit": "iter/sec",
            "range": "stddev: 0.010447475905180515",
            "extra": "mean: 58.076153499999556 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 185.10108219211395,
            "unit": "iter/sec",
            "range": "stddev: 0.001803533561549876",
            "extra": "mean: 5.4024535575762505 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.9960250588884,
            "unit": "iter/sec",
            "range": "stddev: 0.010486789477052224",
            "extra": "mean: 58.83728674999986 msec\nrounds: 20"
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
          "id": "d1932b76a0aba60fc95536572ac167ef8b115164",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d1932b76a0aba60fc95536572ac167ef8b115164"
        },
        "date": 1713818945224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 341.49984126357566,
            "unit": "iter/sec",
            "range": "stddev: 0.0012716963469494994",
            "extra": "mean: 2.9282590477931794 msec\nrounds: 272"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1891.0497937937048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001232781309799672",
            "extra": "mean: 528.8068052369277 usec\nrounds: 1566"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.48100303230731,
            "unit": "iter/sec",
            "range": "stddev: 0.009862488128416653",
            "extra": "mean: 223.16432119999945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.0887349211629,
            "unit": "iter/sec",
            "range": "stddev: 0.010908075820011973",
            "extra": "mean: 62.155290947370496 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 189.44616885296918,
            "unit": "iter/sec",
            "range": "stddev: 0.0016057407225893315",
            "extra": "mean: 5.278544327682386 msec\nrounds: 177"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.30676732869762,
            "unit": "iter/sec",
            "range": "stddev: 0.00974522596550316",
            "extra": "mean: 61.32423305262597 msec\nrounds: 19"
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
          "id": "78663c60e79286218019f0c8f24f3204da4256d3",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/78663c60e79286218019f0c8f24f3204da4256d3"
        },
        "date": 1714425741014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 275.7931742104616,
            "unit": "iter/sec",
            "range": "stddev: 0.001217921864436241",
            "extra": "mean: 3.6259055462949425 msec\nrounds: 216"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1512.3995087616936,
            "unit": "iter/sec",
            "range": "stddev: 0.000604458182884762",
            "extra": "mean: 661.2009553076153 usec\nrounds: 1253"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8793317895061916,
            "unit": "iter/sec",
            "range": "stddev: 0.010602675662968748",
            "extra": "mean: 257.77635279999913 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.905196246004884,
            "unit": "iter/sec",
            "range": "stddev: 0.012355592428849628",
            "extra": "mean: 83.99693540000044 msec\nrounds: 10"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 161.26555195915083,
            "unit": "iter/sec",
            "range": "stddev: 0.0016267860260796515",
            "extra": "mean: 6.200952328946878 msec\nrounds: 152"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.25575215352599,
            "unit": "iter/sec",
            "range": "stddev: 0.011144253137288354",
            "extra": "mean: 81.59433933333086 msec\nrounds: 12"
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
          "id": "a8869f514d9c37626e7e46cc233b22e1a3a5d527",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/a8869f514d9c37626e7e46cc233b22e1a3a5d527"
        },
        "date": 1715029181430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.86830114253365,
            "unit": "iter/sec",
            "range": "stddev: 0.0013879816065717322",
            "extra": "mean: 3.2801048723411714 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1704.9123127484793,
            "unit": "iter/sec",
            "range": "stddev: 0.00001043200704844203",
            "extra": "mean: 586.540429394815 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.903205856209473,
            "unit": "iter/sec",
            "range": "stddev: 0.00930986644106304",
            "extra": "mean: 256.19965660000616 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.79492776308483,
            "unit": "iter/sec",
            "range": "stddev: 0.012917238243239563",
            "extra": "mean: 78.15597074999836 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.77660344716043,
            "unit": "iter/sec",
            "range": "stddev: 0.002031446696615314",
            "extra": "mean: 5.754514590360641 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.64315931472635,
            "unit": "iter/sec",
            "range": "stddev: 0.012210410528400035",
            "extra": "mean: 79.0941547999978 msec\nrounds: 15"
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
          "id": "4203302cd77567b35702717fa4adf000fe947dd7",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/4203302cd77567b35702717fa4adf000fe947dd7"
        },
        "date": 1715633678477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.7542213851379,
            "unit": "iter/sec",
            "range": "stddev: 0.001448845686688098",
            "extra": "mean: 3.18720811336108 msec\nrounds: 247"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1725.1359965680376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895321109084937",
            "extra": "mean: 579.6644449999227 usec\nrounds: 1400"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.715201156983512,
            "unit": "iter/sec",
            "range": "stddev: 0.012417785824133694",
            "extra": "mean: 212.08002940000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.703547635314964,
            "unit": "iter/sec",
            "range": "stddev: 0.009747473084706502",
            "extra": "mean: 63.679878153847696 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.60097051747607,
            "unit": "iter/sec",
            "range": "stddev: 0.0016815661434599581",
            "extra": "mean: 5.567898642856693 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.418880670879526,
            "unit": "iter/sec",
            "range": "stddev: 0.010609362624831394",
            "extra": "mean: 64.85555088889328 msec\nrounds: 18"
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
          "id": "91a1f1e05e4684804e56ef9f4aabf4689c4811dc",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/91a1f1e05e4684804e56ef9f4aabf4689c4811dc"
        },
        "date": 1716843287108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.4975612277042,
            "unit": "iter/sec",
            "range": "stddev: 0.0011264185903573157",
            "extra": "mean: 3.0816872589630555 msec\nrounds: 251"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1832.5007388612073,
            "unit": "iter/sec",
            "range": "stddev: 0.000008483615732890827",
            "extra": "mean: 545.7023720609477 usec\nrounds: 1446"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.576548171236784,
            "unit": "iter/sec",
            "range": "stddev: 0.006448458259977726",
            "extra": "mean: 218.50529319999623 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.272371699744955,
            "unit": "iter/sec",
            "range": "stddev: 0.006620822964180765",
            "extra": "mean: 61.45385678571204 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 188.9294593433364,
            "unit": "iter/sec",
            "range": "stddev: 0.00020046060840081962",
            "extra": "mean: 5.292980795455129 msec\nrounds: 176"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.200153501314954,
            "unit": "iter/sec",
            "range": "stddev: 0.007527456675460866",
            "extra": "mean: 61.72781016666483 msec\nrounds: 18"
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
          "id": "bfa74081fdd3bdaa14785ff6a3d0aba45b57752b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/bfa74081fdd3bdaa14785ff6a3d0aba45b57752b"
        },
        "date": 1717449009436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.4997533468879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011751942314316853",
            "extra": "mean: 3.2414936775510643 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1696.0497980613886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005886991752654976",
            "extra": "mean: 589.6053294797214 usec\nrounds: 1384"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.627341400737762,
            "unit": "iter/sec",
            "range": "stddev: 0.011262668464652091",
            "extra": "mean: 216.10681240000247 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.272390053858084,
            "unit": "iter/sec",
            "range": "stddev: 0.009754048779333262",
            "extra": "mean: 70.06534968750256 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.02904285371767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118414212616373",
            "extra": "mean: 5.554659315789111 msec\nrounds: 171"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.068095065016939,
            "unit": "iter/sec",
            "range": "stddev: 0.00986055529733651",
            "extra": "mean: 71.08282929411637 msec\nrounds: 17"
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
          "id": "0a84e1b7522fdefea34fd3b5c402110991fee923",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/0a84e1b7522fdefea34fd3b5c402110991fee923"
        },
        "date": 1718054020312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 270.89428293856975,
            "unit": "iter/sec",
            "range": "stddev: 0.0012740953359096367",
            "extra": "mean: 3.691476944999863 msec\nrounds: 200"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1584.871827098131,
            "unit": "iter/sec",
            "range": "stddev: 0.000013121850506846115",
            "extra": "mean: 630.9658502990619 usec\nrounds: 1002"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.130301977058488,
            "unit": "iter/sec",
            "range": "stddev: 0.00721691588400727",
            "extra": "mean: 242.1130478000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.189832574297023,
            "unit": "iter/sec",
            "range": "stddev: 0.007304355663517277",
            "extra": "mean: 75.8159737333358 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 159.32323476160008,
            "unit": "iter/sec",
            "range": "stddev: 0.0016088380342998228",
            "extra": "mean: 6.276548436242389 msec\nrounds: 149"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.135365280935668,
            "unit": "iter/sec",
            "range": "stddev: 0.008756061090859378",
            "extra": "mean: 76.13035333333092 msec\nrounds: 12"
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
          "id": "75ef1e0f9c15e5c4fe35decb4f0f60270a5d2d89",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/75ef1e0f9c15e5c4fe35decb4f0f60270a5d2d89"
        },
        "date": 1718658723275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.285628221107,
            "unit": "iter/sec",
            "range": "stddev: 0.0013630205570047402",
            "extra": "mean: 3.4448829111109562 msec\nrounds: 225"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1627.2968178632052,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770064369570343",
            "extra": "mean: 614.5160422012591 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.054715531578919,
            "unit": "iter/sec",
            "range": "stddev: 0.011814684233880499",
            "extra": "mean: 246.62642600000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.113843066067178,
            "unit": "iter/sec",
            "range": "stddev: 0.011770253932084026",
            "extra": "mean: 76.2552971666679 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.1423025358671,
            "unit": "iter/sec",
            "range": "stddev: 0.0018487825248033097",
            "extra": "mean: 5.912181547770684 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.983602627390011,
            "unit": "iter/sec",
            "range": "stddev: 0.012422724646390479",
            "extra": "mean: 77.02022533333046 msec\nrounds: 12"
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
          "id": "43c63ae4fafa977804bf159b2b1fcbc97c2ee515",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/43c63ae4fafa977804bf159b2b1fcbc97c2ee515"
        },
        "date": 1719263163134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.82827847340843,
            "unit": "iter/sec",
            "range": "stddev: 0.001255429403030715",
            "extra": "mean: 3.2591520083331105 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1749.7290683824092,
            "unit": "iter/sec",
            "range": "stddev: 0.000017102894696017",
            "extra": "mean: 571.5170525940229 usec\nrounds: 1407"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.696363825840589,
            "unit": "iter/sec",
            "range": "stddev: 0.010169534328949242",
            "extra": "mean: 270.53613960000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.430952107009018,
            "unit": "iter/sec",
            "range": "stddev: 0.013797757037511628",
            "extra": "mean: 80.44436109090664 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.00561568601898,
            "unit": "iter/sec",
            "range": "stddev: 0.0028864705171011396",
            "extra": "mean: 5.916963149069638 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.390961833358002,
            "unit": "iter/sec",
            "range": "stddev: 0.014815647768266726",
            "extra": "mean: 80.70398516666206 msec\nrounds: 12"
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
          "id": "56e257b86ec01848c367a0ecf50176ca9a6d4a7e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/56e257b86ec01848c367a0ecf50176ca9a6d4a7e"
        },
        "date": 1719872737736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.032964968791,
            "unit": "iter/sec",
            "range": "stddev: 0.0018669921245238802",
            "extra": "mean: 3.2891170209212346 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1732.0271959153831,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414797315383957",
            "extra": "mean: 577.3581398480849 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7769363480372147,
            "unit": "iter/sec",
            "range": "stddev: 0.015183979007375198",
            "extra": "mean: 264.76485380000554 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.333720964616784,
            "unit": "iter/sec",
            "range": "stddev: 0.015678149799191198",
            "extra": "mean: 81.07853281818352 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.79893035648598,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267085716904636",
            "extra": "mean: 5.7537753422812195 msec\nrounds: 149"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.492010762248071,
            "unit": "iter/sec",
            "range": "stddev: 0.012043652927620913",
            "extra": "mean: 74.11793672727381 msec\nrounds: 11"
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
          "id": "474529bf09b8166ee032e79ab1a8b6d1272e581b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/474529bf09b8166ee032e79ab1a8b6d1272e581b"
        },
        "date": 1720471532476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.44691428592114,
            "unit": "iter/sec",
            "range": "stddev: 0.0014234576323486961",
            "extra": "mean: 3.3394900808534267 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1761.8975869917433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218796751184418",
            "extra": "mean: 567.5698788528315 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.903728630474028,
            "unit": "iter/sec",
            "range": "stddev: 0.012390625059818283",
            "extra": "mean: 256.1653472000103 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.306770284565628,
            "unit": "iter/sec",
            "range": "stddev: 0.010747995493746759",
            "extra": "mean: 75.14971541666189 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.64201422814327,
            "unit": "iter/sec",
            "range": "stddev: 0.001904073028738974",
            "extra": "mean: 5.826079380954009 msec\nrounds: 147"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.379900232640658,
            "unit": "iter/sec",
            "range": "stddev: 0.0121708693273135",
            "extra": "mean: 74.73897283333031 msec\nrounds: 12"
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
          "id": "6acbd69f4954950a8b25d83a6b1feeb2382f6d4f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/6acbd69f4954950a8b25d83a6b1feeb2382f6d4f"
        },
        "date": 1721078246280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 317.15095264750937,
            "unit": "iter/sec",
            "range": "stddev: 0.0014818188705012737",
            "extra": "mean: 3.153072666666174 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1703.8682313030101,
            "unit": "iter/sec",
            "range": "stddev: 0.0008470927395944192",
            "extra": "mean: 586.899844499867 usec\nrounds: 1209"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.017511726166706,
            "unit": "iter/sec",
            "range": "stddev: 0.01768325311734706",
            "extra": "mean: 248.9102877999926 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.287047317159686,
            "unit": "iter/sec",
            "range": "stddev: 0.017353108715805036",
            "extra": "mean: 75.26126581249848 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.24983637947193,
            "unit": "iter/sec",
            "range": "stddev: 0.00033698941396433904",
            "extra": "mean: 5.673764132449835 msec\nrounds: 151"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.855559815189903,
            "unit": "iter/sec",
            "range": "stddev: 0.015763875647408155",
            "extra": "mean: 72.17319352940876 msec\nrounds: 17"
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
          "id": "d3d40b8314d31612934e7319f20db80f9770be46",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d3d40b8314d31612934e7319f20db80f9770be46"
        },
        "date": 1721683187527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.30219923885045,
            "unit": "iter/sec",
            "range": "stddev: 0.001164246858017544",
            "extra": "mean: 3.297041704641581 msec\nrounds: 237"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1685.0287441955652,
            "unit": "iter/sec",
            "range": "stddev: 0.000035964251321337",
            "extra": "mean: 593.4616863033996 usec\nrounds: 1358"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.16690348915411,
            "unit": "iter/sec",
            "range": "stddev: 0.008070105092852206",
            "extra": "mean: 239.98635979999676 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.212965500980316,
            "unit": "iter/sec",
            "range": "stddev: 0.010950191642778358",
            "extra": "mean: 70.35829362500223 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.03842866560265,
            "unit": "iter/sec",
            "range": "stddev: 0.002200708938798161",
            "extra": "mean: 5.812654810651267 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.002927775225507,
            "unit": "iter/sec",
            "range": "stddev: 0.010855083388934615",
            "extra": "mean: 71.41363692307525 msec\nrounds: 13"
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
          "id": "05ddee10db73ccaf16d64df2fd1150dc153be14b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/05ddee10db73ccaf16d64df2fd1150dc153be14b"
        },
        "date": 1722287804906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 333.0828456695262,
            "unit": "iter/sec",
            "range": "stddev: 0.0014161895620541302",
            "extra": "mean: 3.00225608433815 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1914.7430008613217,
            "unit": "iter/sec",
            "range": "stddev: 0.000011249195674827973",
            "extra": "mean: 522.2633008973859 usec\nrounds: 1449"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.402803693768822,
            "unit": "iter/sec",
            "range": "stddev: 0.014664472037367678",
            "extra": "mean: 227.12800059999836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.958950631818105,
            "unit": "iter/sec",
            "range": "stddev: 0.013064564875609945",
            "extra": "mean: 66.8496089473664 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.54902935898025,
            "unit": "iter/sec",
            "range": "stddev: 0.0024472720988305",
            "extra": "mean: 5.477980373335829 msec\nrounds: 150"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.300179923190138,
            "unit": "iter/sec",
            "range": "stddev: 0.013516780377286363",
            "extra": "mean: 65.35870852631756 msec\nrounds: 19"
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
          "id": "ec292f04372eeec0effdcbf7286b63eb713ca6db",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/ec292f04372eeec0effdcbf7286b63eb713ca6db"
        },
        "date": 1722894805978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.8696484955309,
            "unit": "iter/sec",
            "range": "stddev: 0.0015034954273718262",
            "extra": "mean: 3.510377484162509 msec\nrounds: 221"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1654.9394225035492,
            "unit": "iter/sec",
            "range": "stddev: 0.000026179136498837184",
            "extra": "mean: 604.2517245055569 usec\nrounds: 1314"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9938000344116324,
            "unit": "iter/sec",
            "range": "stddev: 0.010562429007823447",
            "extra": "mean: 250.38809940000417 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.631748281937213,
            "unit": "iter/sec",
            "range": "stddev: 0.011382874916506672",
            "extra": "mean: 79.16560540000243 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 165.89701991995094,
            "unit": "iter/sec",
            "range": "stddev: 0.002205481311158267",
            "extra": "mean: 6.027835825396518 msec\nrounds: 126"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.561328373355968,
            "unit": "iter/sec",
            "range": "stddev: 0.013409427084983523",
            "extra": "mean: 79.60941472727643 msec\nrounds: 11"
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
          "id": "96b61f9c6188fc4fbf6af5a4a9084c16b184e414",
          "message": "chore(deps): update dependency sqlalchemy to v2",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/14/commits/96b61f9c6188fc4fbf6af5a4a9084c16b184e414"
        },
        "date": 1722938257207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 343.4881215428297,
            "unit": "iter/sec",
            "range": "stddev: 0.0013861227010929936",
            "extra": "mean: 2.911308826367405 msec\nrounds: 311"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1964.7620466491887,
            "unit": "iter/sec",
            "range": "stddev: 0.000009870128160018881",
            "extra": "mean: 508.9674862691154 usec\nrounds: 1493"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8602111703660063,
            "unit": "iter/sec",
            "range": "stddev: 0.014365753472077922",
            "extra": "mean: 259.0531854000062 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.375878363708173,
            "unit": "iter/sec",
            "range": "stddev: 0.010129394029234188",
            "extra": "mean: 65.03693488889122 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 186.09104001683093,
            "unit": "iter/sec",
            "range": "stddev: 0.0020540428228007224",
            "extra": "mean: 5.373713854839843 msec\nrounds: 186"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.337531313360035,
            "unit": "iter/sec",
            "range": "stddev: 0.009809552001480995",
            "extra": "mean: 65.19954088888686 msec\nrounds: 18"
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
          "id": "534ca3261f447b03eafc4d2a29da04f4aac0eec2",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/534ca3261f447b03eafc4d2a29da04f4aac0eec2"
        },
        "date": 1723497372561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 274.81362868877005,
            "unit": "iter/sec",
            "range": "stddev: 0.0014495104689040323",
            "extra": "mean: 3.638829721696637 msec\nrounds: 212"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1545.9866028930333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892738171444961",
            "extra": "mean: 646.8361356616425 usec\nrounds: 1231"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9731584855413478,
            "unit": "iter/sec",
            "range": "stddev: 0.011145377167944484",
            "extra": "mean: 251.68892799999864 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.83668387141881,
            "unit": "iter/sec",
            "range": "stddev: 0.011957991062212946",
            "extra": "mean: 77.90173926667497 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.87108791844048,
            "unit": "iter/sec",
            "range": "stddev: 0.002170398929934288",
            "extra": "mean: 6.139825138889974 msec\nrounds: 144"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.097726440717947,
            "unit": "iter/sec",
            "range": "stddev: 0.014202975135118997",
            "extra": "mean: 82.66015973334031 msec\nrounds: 15"
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
          "id": "d4372625a0332bff91be3174e2b9fce1ea2378f6",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d4372625a0332bff91be3174e2b9fce1ea2378f6"
        },
        "date": 1724102516559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 250.25846308033147,
            "unit": "iter/sec",
            "range": "stddev: 0.0017700304653780507",
            "extra": "mean: 3.995868861701616 msec\nrounds: 188"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1467.0034735354825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205030773790509",
            "extra": "mean: 681.661644324534 usec\nrounds: 925"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.5373077989392714,
            "unit": "iter/sec",
            "range": "stddev: 0.005897107175868865",
            "extra": "mean: 282.70087220000164 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.143587561720956,
            "unit": "iter/sec",
            "range": "stddev: 0.015298300190104492",
            "extra": "mean: 89.73770740000049 msec\nrounds: 10"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 150.90793116237836,
            "unit": "iter/sec",
            "range": "stddev: 0.002464373554990688",
            "extra": "mean: 6.626556949640974 msec\nrounds: 139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.096501186401262,
            "unit": "iter/sec",
            "range": "stddev: 0.014087246363986953",
            "extra": "mean: 90.11849620000021 msec\nrounds: 10"
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
          "id": "d9842b81fd3b2c38ae1a513d60dfc7b262875bbd",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d9842b81fd3b2c38ae1a513d60dfc7b262875bbd"
        },
        "date": 1724707934242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.40789175722165,
            "unit": "iter/sec",
            "range": "stddev: 0.0015119048543389896",
            "extra": "mean: 3.221567577869853 msec\nrounds: 244"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1760.9835118714243,
            "unit": "iter/sec",
            "range": "stddev: 0.000029468303421733448",
            "extra": "mean: 567.8644878039117 usec\nrounds: 41"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.854036138652432,
            "unit": "iter/sec",
            "range": "stddev: 0.014327737422517861",
            "extra": "mean: 259.46824680000304 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.167309706956956,
            "unit": "iter/sec",
            "range": "stddev: 0.014856052299321727",
            "extra": "mean: 82.18743699999891 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.43230009242683,
            "unit": "iter/sec",
            "range": "stddev: 0.0026818716905693926",
            "extra": "mean: 5.902062354430006 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.015154584715116,
            "unit": "iter/sec",
            "range": "stddev: 0.012927742698014048",
            "extra": "mean: 83.22822589999248 msec\nrounds: 10"
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
          "id": "3172f99e1d7181ac83faefad6dca3c943ff88d28",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/3172f99e1d7181ac83faefad6dca3c943ff88d28"
        },
        "date": 1725311901106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 311.2773433128711,
            "unit": "iter/sec",
            "range": "stddev: 0.0023072529368169128",
            "extra": "mean: 3.2125691814160726 msec\nrounds: 226"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1804.1384911931095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006252479413144844",
            "extra": "mean: 554.2811734694945 usec\nrounds: 1372"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.1364134112175215,
            "unit": "iter/sec",
            "range": "stddev: 0.012696523302018849",
            "extra": "mean: 241.7553326000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.431134127065231,
            "unit": "iter/sec",
            "range": "stddev: 0.01511626259607064",
            "extra": "mean: 69.29462308333238 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 187.7562169084181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204395447441772",
            "extra": "mean: 5.326055331034765 msec\nrounds: 145"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.654442768526419,
            "unit": "iter/sec",
            "range": "stddev: 0.012742996596289155",
            "extra": "mean: 68.23869155555447 msec\nrounds: 18"
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
          "id": "dbcf9d7901aa28036aff66811bf39ccaf1042af0",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/dbcf9d7901aa28036aff66811bf39ccaf1042af0"
        },
        "date": 1725917120920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.955547130031,
            "unit": "iter/sec",
            "range": "stddev: 0.0014864467764496606",
            "extra": "mean: 3.425178969299119 msec\nrounds: 228"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1630.4885705886256,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897833552162361",
            "extra": "mean: 613.3131001580638 usec\nrounds: 1268"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7149787771174565,
            "unit": "iter/sec",
            "range": "stddev: 0.016000859003387265",
            "extra": "mean: 269.1805418000058 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.063649816734483,
            "unit": "iter/sec",
            "range": "stddev: 0.013851999981681944",
            "extra": "mean: 76.54828581817955 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.26025898291533,
            "unit": "iter/sec",
            "range": "stddev: 0.0028656312148436676",
            "extra": "mean: 6.087899813332266 msec\nrounds: 150"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.388697157282142,
            "unit": "iter/sec",
            "range": "stddev: 0.01601181889286263",
            "extra": "mean: 80.71873799999985 msec\nrounds: 16"
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
          "id": "caa3351fb7bd399e537e3a223e91ce44c7593a99",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/caa3351fb7bd399e537e3a223e91ce44c7593a99"
        },
        "date": 1726521826566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.7790221784376,
            "unit": "iter/sec",
            "range": "stddev: 0.001284664976085721",
            "extra": "mean: 3.238561975308409 msec\nrounds: 243"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1781.6098688523348,
            "unit": "iter/sec",
            "range": "stddev: 0.000010009933515669603",
            "extra": "mean: 561.2901104124288 usec\nrounds: 1431"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.148769638511218,
            "unit": "iter/sec",
            "range": "stddev: 0.007310283640385797",
            "extra": "mean: 241.03531579999924 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.954900705404253,
            "unit": "iter/sec",
            "range": "stddev: 0.010498233460058588",
            "extra": "mean: 71.65941349999964 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.90149534936697,
            "unit": "iter/sec",
            "range": "stddev: 0.001616959942048631",
            "extra": "mean: 5.750381835366087 msec\nrounds: 164"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.887109405678272,
            "unit": "iter/sec",
            "range": "stddev: 0.018409865200289567",
            "extra": "mean: 77.59692018750019 msec\nrounds: 16"
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
          "id": "9e585fcb7e50ef3fe3b7e2bb007524c173d51baa",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/9e585fcb7e50ef3fe3b7e2bb007524c173d51baa"
        },
        "date": 1727126822388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.6909078674665,
            "unit": "iter/sec",
            "range": "stddev: 0.0018166968450238038",
            "extra": "mean: 3.3591889223744955 msec\nrounds: 219"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1818.26469906306,
            "unit": "iter/sec",
            "range": "stddev: 0.000013117133582098328",
            "extra": "mean: 549.974929676242 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.197817657026847,
            "unit": "iter/sec",
            "range": "stddev: 0.009449915031748895",
            "extra": "mean: 238.21901800000091 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.921954839659671,
            "unit": "iter/sec",
            "range": "stddev: 0.014878954787670859",
            "extra": "mean: 71.82899323529521 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.66382988753662,
            "unit": "iter/sec",
            "range": "stddev: 0.0027506696486435597",
            "extra": "mean: 6.000102125786931 msec\nrounds: 159"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.623009992041824,
            "unit": "iter/sec",
            "range": "stddev: 0.012416757355043943",
            "extra": "mean: 68.38537349999916 msec\nrounds: 18"
          }
        ]
      }
    ]
  }
}